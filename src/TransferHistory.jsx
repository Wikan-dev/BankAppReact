import { UserHistory } from "./assets/data/data";
import { Link } from "react-router-dom";
import shape from './assets/Shape.svg'
import Menu from "./Menu";

const MainHistory = (waktu) => {

    const date = new Date();
    const time = date.getDay();

    if (time == time) {
        waktu = "today";
    }

    return (
        <div className="m-5">
            <div className="flex">
                <Link to='/'><img className="w-3" src={shape} alt="" /></Link>
                <h1 className="relative bottom-2 ml-10 font-bold text-[25px]">Transaction Report</h1>
            </div>

            <div>
                <h1 className="mb-5">{waktu}</h1>
                {Object.values(UserHistory).map((item) => (
                    <div key={item.id} className="flex flex-end relative mb-2">
                        <div className="flex flex-start flex-col">
                            <h1>{item.nama}</h1>
                            <h1 className="text-black/50 relative bottom-2">{item.state}</h1>
                        </div>
                        <h1 className="ml-auto font-bold mt-2">${item.nominal}</h1>
                        <div className="h-[1px] w-full bg-black absolute top-11 "></div>
                    </div>
                ))}
            </div>

            <Menu />    
        </div>
    )
}

export default MainHistory;