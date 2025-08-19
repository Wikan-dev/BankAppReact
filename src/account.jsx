import { UserData } from "./assets/data/data";
import mata from './assets/mata.svg'
import Menu from "./Menu";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Data = Object.values(UserData);
const currentUser = Data.find(user => user.id === 1);

const Container = ({title, placeHolder}) => {
    if (placeHolder == null) {
        placeHolder = "no input yet";
    }

    return (
        <div>
            <h1>{title}</h1>
            <input readOnly className="text-black bg-gray-200 items-center h-10 pl-3 w-full mt-2 text-black/30" type="text" value={placeHolder} />
        </div>
    )
}


const Account = () => {
    const [hide, setHide] = useState(false);
    const  handleHide = () => {
        setHide((prev) => !prev);
        console.log("click");
    };

    return (
        <div className="m-5 h-[120dvh]">
            <h1 className="font-bold text-[30px]">Account</h1>

            <Link>
                <div className="relative w-full h-50 bg-linear-to-t from-[#6C56F0] to-[#469FEF] mt-10 rounded-xl p-10">
                <div className="flex gap-7">
                    {/* <h1 className="text-white font-bold text-[25px]">{currentUser.nomer}</h1> */}
                    <input className="font-bold text-white text-[30px] w-40" type={hide ? "password" : "text"} defaultValue={currentUser.nomer} />
                    <button onClick={handleHide}><img className="w-7 mouse-pointer" src={mata} alt="mata" /></button>
                </div>

                <div className="absolute bottom-5">
                    <h1 className="text-gray-400">Card Holder Name</h1>
                    <h1 className="text-white">{currentUser.nama}</h1>
                </div>
                <div className="absolute bottom-5 right-10">
                    <h1 className="text-gray-400">Expiry date</h1>
                    <h1 className="text-white">{currentUser.expire}</h1>
                </div>
            </div>
            </Link>

            <h1 className="mt-10 tracking-[5px]">DETAIL INFORMATION</h1>

            <div>
                <Container title="Name" placeHolder={currentUser.nama} />
                <Container title="Phone Number" placeHolder={currentUser.phone} />
                <Container title="Email" placeHolder={currentUser.email} />
                <Container title="Home addres" placeHolder={currentUser.Home} />
            </div>

                <Link to='/Card'><button className="text-white font-medium bg-linear-to-t from-[#6C56F0] to-[#469FEF] w-[80%] h-15 relative top-10 rounded-xl hover:scale-110 transition-all transition-1s left-8">More card    </button></Link>

            <Menu />
        </div>
    )
}

export default Account;