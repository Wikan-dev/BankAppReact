import shape from './assets/Shape.svg';
import { UserData } from '../backEnd/data/data.js'
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

const Data = Object.values(UserData);
const currentUser = Data.find(user => user.id === 1);

const date = new Date();
const today = date.getDate();

const Confirm = ({nama, nominal}) => {
    const navigate = useNavigate();

    async function handleConfirm() {
        try {
            const res = await fetch("http://localhost:3001/add-history", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nama : "mobile recharge",
                    nominal : nominal,
                    tanggal : today,
                    state : "succes"
                })
            });

            const mainData = await res.json();
            console.log("new: " + mainData)
        } catch (err) {
            console.error("Error: ", err);
        }
        
        navigate('/sccMr');
    }

    return (
        <div className='w-full h-[100vh] absolute left-0 top-0 bg-white z-10'>
            <div className='m-5 relative'>
                <div className="flex flex-col">
                    <Link to='/'><img className="w-3" src={shape} alt="" /></Link>
                    <h1 className="relative bottom-7 ml-10 font-bold text-[25px]">Confirm</h1>

                        <h1 className='text-gray-500'>confirm transaction information</h1>
                    <div className='flex flex-col gap-2 mt-7'>
                        <h1 className='text-gray-500'>From:</h1>
                        <input type="text" readOnly value={currentUser.nomer} className='bg-white relative left-0 h-9 rounded-lg border-1 border-gray-500 pl-5 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2 mt-7'>
                        <h1 className='text-gray-500'>To:</h1>
                        <input type="text" readOnly value={nama || ""} className='bg-white relative left-0 h-9 rounded-lg border-1 border-gray-500 pl-5 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2 mt-7'>
                        <h1 className='text-gray-500'>Amount:</h1>
                        <input type="text" readOnly value={nominal || ""} className='bg-white relative left-0 h-9 rounded-lg border-1 border-gray-500 pl-5 text-gray-500' />
                    </div>
                </div>
            </div>
            <button onClick={handleConfirm} className='bg-linear-to-b from-[#469FEF] to-[#6C56F0] w-[80%] h-10 mx-auto flex justify-center pt-2 rounded-lg mt-10 text-white hover:scale-110 transition-all duration-100'>Verify</button>

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
        // console.log("amount: " + isActive)

    }

    return (
        <div>
            <button ref={btn} onClick={handleChoseAmount} className={`w-20 h-20 font-bold rounded-lg border-gray-400 border-2 transition-all duration-200 ${isActive ? "bg-gradient-to-b from-[#469FEF] to-[#6C56F0] text-white border-transparent" : "border-gray-400 hover:bg-gradient-to-b from-[#469FEF] to-[#6C56F0]/40"}`}>{jumlah} $</button>
        </div>
    )
}

const MiniCard = ({nama, selected, setSelected}) => {
    // const profile = useRef(null);
    const isSelected = selected === nama;
    function handleSelec() {
        if (isSelected) {
            setSelected(null);
        } else {
            setSelected(nama);
        }

        // console.log("profile: " + isSelected);
    }

    return (
        <div  onClick={handleSelec} className={`drop-shadow-xl w-25 bg-white justify-center flex flex-col h-35 rounded-xl ${isSelected ? "bg-blue-400 text-white" : ''}`} style={{backgroundColor : isSelected ? "blue" : "white"}}>
            <div className='rounded-full bg-blue-600 w-15 h-15 mx-auto'></div>
            <h1 className='text-center mt-2'>{nama}</h1>
        </div>
    )
}

const MobileRecharge = () => {
    const [active, setActive] = useState(null);
    const [phoneNum, setPhoneNum] = useState("");
    // const [verify, setVerfy] = useState(null);
    const [selected, setSelected] = useState(null);
    const [cardNum, setCardNum] = useState("");
    const [confirm, setConfirm] = useState(false);
    const btn = useRef(null);
    const phone = useRef(null);
    const card = useRef(null);

    function handleConfirm() {
        // console.log(confirm);
        if (active !== null && selected !== null && phoneNum !== "" && phoneNum.length >= 8 && cardNum !== null) {
            setConfirm(true);
            console.log(setConfirm);
        } else {
            alert("isi semua data dengan benar");
        }
    }

    useEffect(() => {
        if (active !== null && selected !== null && phoneNum !== "" && phoneNum.length >= 8 && cardNum !== null) {
            btn.current.style.filter = "grayscale(0%)";
        } else {
            btn.current.style.filter = "grayscale(100%)";

            // console.log("working");  
        }
    }, [selected, active, phoneNum, cardNum]);

    // console.log(phoneNum);
    return(
        <div className='m-5'>
            {confirm ? (
                 <Confirm nama={selected} nominal={active}/>
            ) : (<div />)}
            <div className="flex">
                <Link to='/'><img className="w-3" src={shape} alt="" /></Link>
                <h1 className="relative bottom-2 ml-10 font-bold text-[25px]">Mobile Prepaid</h1>
            </div>

            <input ref={card} onChange={(e) => setCardNum(e.target.value)} type="text" className='border-2 border-gray-300 w-full h-9 rounded-lg pl-4' placeholder='Chose account / card' />

            <div className='flex justify-between mt-3'>
                <h1 className='text-gray-400 font-bold'>directionary</h1>
                <h1 className='text-blue-900 font-bold'>find beneficiary</h1>
            </div>

            <div className='flex justify-between'>
                {Object.values(UserData).map((item) => (
                    <MiniCard nama={item.nama} key={item.id} setActive={setActive} selected={selected} setSelected={setSelected} />
                ))}
            </div>
                <div>
                    <h1 className='font-bold text-gray-400 mt-5'>Phone number</h1>
                    <input onChange={(e) => setPhoneNum(e.target.value)}  ref={phone} type="text" className='border-2 border-gray-300 w-full h-9 rounded-lg pl-4' placeholder='phone number' />
                </div>

                <div className='flex justify-between mt-5'>
                    <ChoseAmount jumlah="10" active={active} setActive={setActive}/>
                    <ChoseAmount jumlah="30" active={active} setActive={setActive}/>
                    <ChoseAmount jumlah="50" active={active} setActive={setActive}/>
                </div>

                <button onClick={handleConfirm} ref={btn} className='bg-linear-to-b from-[#469FEF] to-[#6C56F0] w-full h-10 rounded-lg  mt-10 text-white hover:scale-110 transition-all duration-100'>Verify</button>
        </div>
    )
}

export default MobileRecharge;