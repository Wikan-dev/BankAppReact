import { useState } from "react";
import { UserData } from "../backEnd/data/data";
import shape from './assets/shape.svg';
import { Link, useLocation } from "react-router-dom";
import mr from './assets/mr.svg';
import Menu from "./Menu";

const Data = Object.values(UserData);
const CurrentUser = Data.find(user => user.id === 1);

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const Succes = () => {
    const location = useLocation();
    const title = location.state?.title || "";

    return (
        <div className="w-full h-[100vh] bg-white absolute left-0 top-0 z-20 p-5">
            <div>
                <Link to='/payBill'><img className="w-3" src={shape} alt="" /></Link>
                <h1 className="relative bottom-7 ml-10 font-bold text-[25px]">{title}</h1>
            </div>

            <img src={mr} alt="succes" className="w-70 mx-auto mt-10" />

            <div className="text-center flex gap-5 flex-col mt-5">
                <h1 className="text-[20px] font-bold text-blue-600">
                    Transaction succesfully
                </h1>
                <h1>
                    You 've pay your {title};
                </h1>
            </div>

            <Link to='/'><button className="text-white left-10 font-medium bg-linear-to-t from-[#6C56F0] to-[#469FEF] w-[80%] h-15 absolute bottom-15 rounded-xl hover:scale-110 transition-all transition-1s">continue</button></Link>
        </div>
    )
}

const Tanggal = ({day, stringMonth, year}) => {
    return(
        <div className="flex gap-1 font-bold justify-center text-[15px] text-gray-400">
            <h1>{day}</h1>
            <h1>{stringMonth}</h1>
            <h1>{year}</h1>
        </div>
    )
}


const Bill = () => {
    const location = useLocation();
    const title = location.state?.title || "";
    const billCode = location.state?.billCode || "";
    const [inputValue, setInputValue] = useState("");
    const [scc, setScc] = useState(false);

    const [charge] = useState(() => Math.floor(Math.random() * 101))

    // let charge = Math.floor(Math.random() * 101);
    let total = charge + 10;
    
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(prev => !prev);
    }

    const date = new Date();
    const today = date.getDate();

    async function handlePayBill() {
        setScc(true);

        const res = await fetch("http://localhost:3001/add-history", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nama : title,
                    nominal : charge,
                    tanggal : today,
                    state : "succes"
                })
            });

            const mainData = await res.json();
            console.table("Data terbaru: ", mainData);
    }

    return(
        <div className="m-5 mb-35">
            {scc ? (
                <Succes />
            ) : (null)}

            <div>
                <Link to='/payBill'><img className="w-3" src={shape} alt="" /></Link>
                <h1 className="relative bottom-7 ml-10 font-bold text-[25px]">{title}</h1>
            </div>
        
            <div className="flex justify-between w-[70%] mx-auto relative bottom-2  ">
                <Tanggal day={`${day} /`} stringMonth={`${month} /`} year={year}/>
                <h1 className="text-center font-bold text-[20px] relative "> - </h1>
                <Tanggal day={`${day} /`} stringMonth={`${month + 1} /`} year={year}/>
            </div>

            <div className="flex gap-2 flex-col">
                <h1 className="font-bold text-[20px]">All the Bills</h1>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">name</h1>
                    <h1 className="font-[500]">{CurrentUser.nama}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">Addres</h1>
                    <h1 className="font-[500]">{CurrentUser.Home}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">Phone Number</h1>
                    <h1 className="font-[500]">{CurrentUser.phone}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">Code</h1>
                    <h1 className="font-[500]">{billCode}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">from</h1>
                    <Tanggal day={`${day} /`} stringMonth={`${month} /`} year={year}/>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">to</h1>
                    <Tanggal day={`${day} /`} stringMonth={`${month + 1  } /`} year={year}/>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">fee</h1>
                    <h1 className="text-blue-800 font-bold text-[30px]">{charge}$</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">tax</h1>  
                    <h1 className="text-blue-800 font-bold text-[30px]">10$</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500 font-bold text-[20px]">total</h1>
                    <h1 className="text-red-500 font-bold text-[30px]">{total}$</h1>
                </div>
            </div>

            <div className="relative">
                <input value={inputValue} onChange={(e) => inputValue(e.currentTarget.value)} type="text" className="bg-white w-full border-1 border-gray-500  rounded-lg h-10 mt-10 pl-3" placeholder="account / card" />    
                <button onClick={handleShow} className="w-full h-10 absolute left-0 top-10"><img src={shape} className="absolute right-7 bottom-3 -rotate-90" /></button>
            </div>

            {show ? (
                <div className="flex gap-5 bg-white flex-col p-5 border-1 rounded-lg overflow-auto h-30 relative z-20">
                {Object.values(UserData).map((item) => (
                    <h1 key={item.id} className="font-bold" onClick={() => {setInputValue(item.nomer); setShow(false)}}>{item.nomer}</h1>
                ))}
            </div>
            ) : null}

            <button onClick={handlePayBill} className="text-white left-10 font-medium bg-linear-to-t from-[#6C56F0] to-[#469FEF] w-[80%] h-15 absolute bottom-10 rounded-xl hover:scale-110 transition-all transition-1s">Send</button>

            <Menu />
        </div>
    )
}

export default Bill;