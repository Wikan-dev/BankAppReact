import { Link } from "react-router-dom"; 
import shape from './assets/shape.svg';
import Menu from "./Menu";

const Container = ({ title, desk }) => {
    return (
        <div className="bg-white w-full h-15 drop-shadow-lg rounded-xl p-3 relative">
            <div className="w-10 h-10 bg-blue-500 rounded-md"></div>
            <div>
                <h1 className="absolute top-3 left-15 font-[500]">{title}</h1>
                <h1 className="absolute top-8 left-15 font-[400] text-gray-500">{desk}</h1>
            </div>
        </div>
    )
}

const Message = () => {
    return (
        <div className="m-5">
            <div>
                <Link to='/payBill'><img className="w-3" src={shape} alt="" /></Link>
                <h1 className="relative bottom-7 ml-10 font-bold text-[25px]">Message</h1>
            </div>

            <div className="flex flex-col gap-3">
                <Container title='Bank of america' desk='dkansldan dkasbad askdbadsj    ' />
                <Container title='Bank of america' desk='dkansldan dkasbad askdbadsj    ' />
                <Container title='Bank of america' desk='dkansldan dkasbad askdbadsj    ' />
                <Container title='Bank of america' desk='dkansldan dkasbad askdbadsj    ' />
                <Container title='Bank of america' desk='dkansldan dkasbad askdbadsj    ' />
                <Container title='Bank of america' desk='dkansldan dkasbad askdbadsj    ' />
            </div>

            <Menu state={"message"}></Menu>
        </div>
    )
}

export default Message;