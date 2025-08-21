import { useState, useRef, useEffect, use } from 'react';
import Logo from './assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import Shape from './assets/Shape.svg';
import succes from './assets/succes.svg';
// import Profile from './Transfer.jsx';
import Menu from './Menu';
// import { UserHistory } from './assets/data/data';
import { UserData } from '../backEnd/data/data.js'
const Data = Object.values(UserData);
const currentUser = Data.find(user => user.id === 1);

const TransferSucces = ({value, title}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true)
    }, []);

    return (
        <div className='bg-white absolute top-0 left-0 w-full h-[100vh] z-10'>
            
            <div className='flex justify-center mt-30 flex-col justify-center'>
                <img className={` w-50 transition-all dduration-10000 mx-auto ${show ? "opacity-100 scale-100" : "opacity-0 scale-0"} `} style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"}} src={succes} alt="succes" />
                <h1 className='font-bold text-[30px] mx-auto text-center w-80'>$ {value} <span>has been sent to {title}</span></h1>
            </div>
            <Link to="/Transfer"><button  className="text-white font-medium bg-linear-to-t from-[#6C56F0] to-[#469FEF] w-[80%] left-10 h-15 absolute bottom-20 rounded-xl hover:scale-110 transition-all transition-1s">Close</button></Link>
            <Link to="/TransferHistory"><button className="text-blue-400 font-medium w-[80%] left-10 h-15 absolute bottom-40 rounded-xl hover:scale-110 transition-all transition-1s">View receipt</button></Link>
            {/* <Profile title={name} /> */}
        </div>
    )
}

const CardInfo = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='flex flex-row '>
            <img className='w-10 h-7' src={Logo} alt="card logo" />  
            <div className="ml-5">
                <h1 className="font-bold relative top-1">**** 0394</h1>
                <h1 className="text-black/50">Balance: <span>$5000.00</span></h1>
            </div>
            <button><img src={Shape} alt="button" className="absolute top-7 right-10 -rotate-90 transition-all transition-1s" style={{rotate: show ? "90deg" : ''}}/></button>
        </div>

    )
}

const TransferProces = ({ num }) => {
    const [show, setShow] = useState(false);
    const [proces, setProces] = useState(false);
    const [amount, setAmount] = useState('');
    const location = useLocation();
    const {title} = location.state || {};
    // const [nama, setNama] = useState("");
    // const [nominal, setNominal] = useState("");
    // const [tanggal, setTanggal] = useState("");
    // const [state, setState] = useState("succes");

    const date = new Date();
    const today = date.getDate();
    const [saldo, setSaldo] = useState(currentUser.ssaldo);

   const handleSend = async () => {
        if (amount == null || amount < 1 || amount == '')  { 
            alert("Please enter an amount"); 
        } else if (amount <= 9999 ) {
            setProces(true);
            const res = await fetch("http://localhost:3001/add-history", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nama : title,
                    nominal : amount,
                    tanggal : today,
                    state : "succes"
                })
            });


            if (saldo > amount) {
                 await fetch("http://localhost:3001/update-saldo", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id: currentUser.id,         // id user yang dipilih
                        newSaldo: saldo - amount    // saldo baru   
                    })
                });
            } else if (saldo < amount) {
                alert("saldo anda kurang");
            }

            const mainData = await res.json();
            console.table("Data terbaru: ", mainData);

        } else {
            alert("Amount exceeds limit of 9999");
        }
    }
    const card = useRef(null);
    
    useEffect(() => {
        const handleClick = () => {
            setShow(prev => !prev);
            console.log('clicked'); 
        };
        
        const currentCard = card.current;
        currentCard.addEventListener('click', handleClick);
        
        return () => {
            currentCard.removeEventListener('click', handleClick);
        }
    }, []);
    
    return (
        <div className="w-full h-[100vh] bg-white relative left-0 top-0 px-10 pt-15 ">
            {proces && <TransferSucces value={amount} title={title} />}

            <div className="flex flex-row justify-between">
                <Link to='/Transfer'><img src={Shape} alt="back" className="w-3 " /></Link>
                <h1 className="font-bold text-[25px] bottom-2 relative mr-5">Transfer Money to</h1>
            </div>
            <div className="bg-blue-400 rounded-full w-20 h-20 mx-auto mt-5"></div>
            <div className="text-center mt-2">
                <h1 className="font-bold">{title}</h1>
                <h1 className="text-black/50">{num}</h1>
            </div>
            <div className='mx-10 relative'>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className='top-3 absolute left-2 w-full h-15 font-bold text-[30px] text-center focus:outline-none' placeholder='input nominal' max="9999" />
                <h1 className="text-center text-black/50">no fee</h1> 
            </div>
                <h1 className="text-center text-black/50 mt-15">Select your account</h1>
                <div className="bg-white flex-col p-5 h-17 rounded-[15px] flex relative drop-shadow-md overflow-auto gap-10" ref={card} style={{height: show ? '250px' : '80px', transition: 'all 0.3s ease'}}>
                    <CardInfo />
                    <CardInfo />
                    <CardInfo />
                    <CardInfo />
                    <CardInfo />
                </div>

                <button onClick={handleSend} className="text-white font-medium bg-linear-to-t from-[#6C56F0] to-[#469FEF] w-[80%] h-15 absolute bottom-15 rounded-xl hover:scale-110 transition-all transition-1s">Send</button>
            <Menu></Menu>
        </div>
    )
}

export default TransferProces;
