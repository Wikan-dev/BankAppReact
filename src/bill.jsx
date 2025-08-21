import { useState } from "react";
import { UserData } from "../backEnd/data/data";
import shape from './assets/shape.svg';
import { Link, useLocation } from "react-router-dom";

const Data = Object.values(UserData);
const CurrentUser = Data.find(user => user.id === 1);

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

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

    const [charge] = useState(() => Math.floor(Math.random() * 101))

    // let charge = Math.floor(Math.random() * 101);
    let total = charge + 10;
    
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(prev => !prev);
    }

    return(
        <div className="m-5">
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
                <input value={inputValue} type="text" className="bg-white w-full border-1 border-gray-500  rounded-lg h-10 mt-10 pl-3" placeholder="account / card" />    
                <button onClick={handleShow} className="w-full h-10 absolute left-0 top-10"><img src={shape} className="absolute right-7 bottom-3 -rotate-90" /></button>
            </div>

            {show ? (
                <div className="flex gap-5 bg-white flex-col p-5 border-1 rounded-lg overflow-auto h-30 relative z-20">
                {Object.values(UserData).map((item) => (
                    <h1 key={item.id} className="font-bold" onClick={() => {setInputValue(item.nomer); setShow(false)}}>{item.nomer}</h1>
                ))}
            </div>
            ) : null}

            <button  className="text-white left-10 font-medium bg-linear-to-t from-[#6C56F0] to-[#469FEF] w-[80%] h-15 absolute bottom-5 rounded-xl hover:scale-110 transition-all transition-1s">Send</button>

        </div>
    )
}

export default Bill;