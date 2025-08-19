import { UserData } from "./assets/data/data";
const Data = Object.values(UserData);
const currentUser = Data.find(user => user.id === 1);

import cardBg1 from './assets/1.svg';
import cardBg2 from './assets/2.svg';
import Shape from './assets/Shape.svg';
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className="m-5 mt-10">
            <div className="flex">
                <Link to='/account'><img src={Shape} alt="back" /></Link>
                <h1 className="font-medium text-[20px] relative bottom-2 ml-5">Card</h1>
            </div>

            <div className="relative">
                <h1 className="absolute top-10 text-white z-10 left-10 text-[30px]">{currentUser.nama}</h1>
                <h1 className="absolute top-27 text-white z-10 left-10 text-[15px]">{currentUser.tipe}</h1>
                <h1 className="absolute top-33 text-white z-10 left-10 text-[15px]">{currentUser.nomer}</h1>
                <h1 className="absolute top-38 text-white z-10 left-10 text-[25px] font-bold">{currentUser.saldo}</h1>
                <img className="relative" src={cardBg1} alt="card" />
            </div>
        </div>
    )
}

export default Card