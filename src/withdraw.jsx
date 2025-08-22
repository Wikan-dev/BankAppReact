import ilustrasi from './assets/wd-ilustrasi.svg'
import shpae from './assets/Shape.svg'
import { useState, useRef, useEffect } from 'react'
import Logo from './assets/Logo.png'
import Menu from './Menu.jsx'

import { Link, useNavigate } from 'react-router-dom'

import { UserData } from '../backEnd/data/data.js'
const Data = Object.values(UserData);
const currentUser = Data.find(user => user.id === 1);

const CustomAmount = ({ setCustom, cAmount, setCAmount }) => {
    function handleHide() {
        setCustom(false);
        console.log("close");
    }

    function handleConfirm() {
        if (cAmount && cAmount > 0) {
            setCustom(false);
            console.log(cAmount);
        } else {
            alert("please enter valid amont");
        }
    }

    return (
        <div className='absolute top-32 w-[80%] h-70 bg-white p-10 rounded-lg border-gray-500 border-2'>
            <button onClick={handleHide} className='font-bold absolute right-10 top-7 text-[20px]'>X</button>
            <h1 className='font-bold text-[20px] mt-3' value={cAmount || ""}>input custom amount</h1>
            <input onChange={(e) => setCAmount(e.target.value)} type="number" className='bg-white border-gray-300 border-2 w-full pl-5 rounded-md mt-5 h-9 font-bold' />
            <button onClick={handleConfirm} className='bg-linear-to-b from-[#469FEF] to-[#6C56F0] p-2 w-30 text-white font-bold rounded-md absolute bottom-10 left-10'>Confirm</button>
        </div>
    )
}



const ChoseAmount = ({jumlah, active, setActive}) => {
    const btn = useRef(null);
    const isActive = active === jumlah;

    function handleChoseAmount() {
        if (isActive) {
            setActive(null);
        } else {
            setActive(jumlah);
        }
    }

    return (
        <div>
            <button ref={btn} onClick={handleChoseAmount} className={`w-20 h-20 font-bold rounded-lg border-gray-400 border-2 transition-all duration-200 ${isActive ? "bg-gradient-to-b from-[#469FEF] to-[#6C56F0] text-white border-transparent" : "border-gray-400 hover:bg-gradient-to-b from-[#469FEF] to-[#6C56F0]/40"}`}>{jumlah} $</button>
        </div>
    )
}

const CardInfo = ({setInputValue, setShow}) => {
    function handleClick() {
        setInputValue(currentUser.nama);
        setShow(false); 
    }

    return (
        <div className='flex flex-row' onClick={handleClick}>
            <img className='w-10 h-7' src={Logo} alt="card logo" />  
            <div className="ml-5">
                <h1 className="font-bold relative top-1">{currentUser.nomer}</h1>
                <h1 className="text-black/50">Balance: <span>$5000.00</span></h1>
            </div>
        </div>

    )
}

const Withdraw = () => {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const btn = useRef(null);
    const phone = useRef(null);
    const [active, setActive] = useState(null);
    const navigate = useNavigate();
    const [cAmount, setCAmount] = useState(null);
    const amount = active || cAmount;
    
    useEffect(() => {
        if (!btn.current) return;

        const phoneValue = phone.current?.value || "";
        const amount = active || cAmount;

        if (inputValue === "" || amount === undefined || amount === null || phoneValue === "") {
            btn.current.style.filter = "grayscale(100%)";     
        } else {
            btn.current.style.filter = "none";
        }
    }, [inputValue, active, cAmount])

    function handleCard() {
        setShow((prev) => !prev);
        console.log("click");
    }

    const date = new Date();
    const today = date.getDate();

    async function handleVerify() {
        if (inputValue === "") {
            alert("please insert card / account");
        } else if (!amount) {
            alert("pelase pick amount");
        } else if (phone === "") {
            alert("pelase insert phone number");    
        } else {
            alert("verifying...");

            // setTimeout(anotherPage, 3000);

            // setProces(true);
            const res = await fetch("http://localhost:3001/add-history", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nama : "withdraw",
                    nominal : amount,
                    tanggal : today,
                    state : "succes"
                })  
            });

            setTimeout(navigate('/sccWd'), 3000);

            const mainData = await res.json();
            console.table("Data terbaru: ", mainData);
            console.log("succes");
        }
    }

    const [custom, setCustom] = useState(false);
    function handleCustom() {
        setCustom(true);
        console.log("custom")
    }
    return (
        <div className="m-10">
            <div className='flex '>
                <Link to='/'><img src={shpae} alt="" /></Link>
                <h1 className='font-medium ml-5 text-[20px] relative bottom-2'>Withdraw</h1>
            </div>
            <img src={ilustrasi} alt="" />

            <div>
                <div className='mt-10 relative'>
                    <input readOnly type="text" className='border-gray-400 rounded-md border-1 w-full h-9 pl-3' placeholder='chose account/ card' value={inputValue} onChange={e => setInputValue(e.target.value)} />
                    <button className='w-full h-10 absolute left-0' onClick={handleCard}><img className='absolute bottom-0 top-[-2px] right-5 rotate-270 p-3' src={shpae} alt="" /></button>
                </div>
                <div className='border-gray-500 border-2 rounded-lg p-5 flex gap-10 flex-col overflow-y-auto transition-all duration-2s' style={{height : show ? '200px' : '0px', opacity : show ? "100%" : "0%"}}>
                    <CardInfo setInputValue={setInputValue} setShow={setShow} />
                    <CardInfo setInputValue={setInputValue} setShow={setShow} />
                    <CardInfo setInputValue={setInputValue} setShow={setShow} />
                    <CardInfo setInputValue={setInputValue} setShow={setShow} />
                </div>
                <input ref={phone} type="number" className='border-gray-500 border-2 rounded-lg h-9 w-full pl-5'placeholder='phone number'  />
            </div>
            <h1 className='text-gray-400 mt-2'>choose amount</h1>
            <div className='flex flex-wrap justify-between gap-y-10'>
                <ChoseAmount jumlah="10"  active={active} setActive={setActive}/>
                <ChoseAmount jumlah="50"  active={active} setActive={setActive}/>
                <ChoseAmount jumlah="100" active={active} setActive={setActive} />
                <ChoseAmount jumlah="150" active={active} setActive={setActive} />
                <ChoseAmount jumlah="200" active={active} setActive={setActive} />
                {/* <ChoseAmount jumlah="custom" active={active} setActive={setActive} /> */}

                <button onClick={handleCustom} className='border-2 border-gray-500 w-20 h-20 rounded-lg font-bold hover:bg-gradient-to-b from-[#469FEF] to-[#6C56F0] hover:border-transparent transition-all duration-200'>custom</button>
            </div>
            <button ref={btn} onClick={handleVerify} className='bg-linear-to-b from-[#469FEF] to-[#6C56F0] w-full h-10 rounded-lg  mt-10 text-white hover:scale-110 transition-all duration-100'>Verify</button>

            {custom ? (
                <CustomAmount setCustom={setCustom} cAmount={cAmount} setCAmount={setCAmount} />
            ) : (
                <div/>
            )}

            <Menu />
        </div>
    )
}

export default Withdraw;