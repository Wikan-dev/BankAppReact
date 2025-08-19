import ilustrasi from './assets/wd-ilustrasi.svg'
import shpae from './assets/Shape.svg'
import { useState, useRef, useEffect } from 'react'
import Logo from './assets/Logo.png'

import { Link, useNavigate } from 'react-router-dom'

import { UserData } from './assets/data/data'
const Data = Object.values(UserData);
const currentUser = Data.find(user => user.id === 1);

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
    
    useEffect(() => {
        if (!btn.current) return;

        if (inputValue === "" || active === null || phone === "") {
            btn.current.style.filter = "grayscale(100%)";     
        } else {
            btn.current.style.filter = "none";
        }
    }, [inputValue, active, phone])

    function handleCard() {
        setShow((prev) => !prev);
        console.log("click");
    }

    function anotherPage() {
        navigate('/sccWd');
    }

    function handleVerify() {
        if (inputValue === "") {
            alert("please insert card / account");
        } else if (active === null) {
            alert("pelase pick amount");
        } else if (phone === "") {
            alert("pelase insert phone number");    
        } else {
            alert("verifying...");

            setTimeout(anotherPage, 3000);
            console.log("succes");
        }
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
                <ChoseAmount jumlah="custom" active={active} setActive={setActive} />
            </div>
            <button ref={btn} onClick={handleVerify} className='bg-linear-to-b from-[#469FEF] to-[#6C56F0] w-full h-10 rounded-lg  mt-10 text-white hover:scale-110 transition-all duration-100'>Verify</button>
        </div>
    )
}

export default Withdraw;