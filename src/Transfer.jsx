import { Link } from "react-router-dom";
import Menu from "./Menu";
import Shape from "./assets/Shape.svg";
import search from './assets/search.svg';

const Profile = ({title}) => {
    return (
        <div className="h-15 flex w-[100%] relative">
            <div className='w-10 h-10 bg-blue-500 absolute mt-3 rounded-full '></div>
            <h1 className='font-bold ml-13 mt-3 text-[20px]'>{title}</h1>
            <img src={Shape} className="w-10 h-5 rotate-180 mt-5 flex absolute right-0" />
        </div>
    )
}

const Transfer = () => {
    return (
        <div className="mx-10 mt-10">
            <div className="flex justify-between">
                <Link to="/"><img className="w-3" src={Shape} alt="panah" /></Link>
                <h1 className="font-bold text-[20px]">Transfer Money To</h1>
            </div> 
            <div>
                <img src={search} className="absolute top-27 left-15" />
                <input type="text" className="bg-[#EBEDF6] w-full h-15 rounded-xl mt-5 text-[13px] pl-14" placeholder="Write Name, phone or card Numeber"/>
            </div>

            <div className="mt-5 flex gap-5 flex-col"> 
                <Link to="/tfProces" state={{ title: "gred" }}><Profile title={"gred"}/></Link>
                <Link to="/tfProces" state={{ title: "gred" }}><Profile title={"gred"}/></Link>
                <Link to="/tfProces" state={{ title: "gred" }}><Profile title={"gred"}/></Link>
                <Link to="/tfProces" state={{ title: "gred" }}><Profile title={"gred"}/></Link>
                <Link to="/tfProces" state={{ title: "gred" }}><Profile title={"gred"}/></Link>
                <Link to="/tfProces" state={{ title: "gred" }}><Profile title={"gred"}/></Link>
                
            </div>

            <div className="absolute -left-0">
                <Menu />
            </div>

            {/* <TransferReport title="gred" num="2929 **** 92292" amount="$200.00" /> */}
        </div>
    )
}

export default Transfer;