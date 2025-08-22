import { Link } from "react-router-dom";
import { useState } from "react";
import Home from './assets/home.svg?react';
import Setting from './assets/22.svg?react';
import Mssg from './assets/mssg.svg?react';
import Srch from './assets/search2.svg?react';

const Menu = ({state}) => {
  // const [home, sethome] = useState(false);
  // const [sch, setsch] = useState(false);
  // const [setting, setsetting] = useState(false);
  // const [mssg, setmssg] = useState(false);

  const [active, setactive] = useState(state || "home");
  

  return (
    <div className="bg-white w-full absolute -bottom-0 h-10 fixed left-0 flex justify-between px-10 items-center font-bold">
      <Link to={"/"}><Home onClick={() => setactive("home")} className={`w-6 h-6 fill-white stroke-2 h-8 py-[5px] rounded-xl bg-linear-to-b from-[#6C56F0] to-[#469FEF] transition-all duration-200 ${active === "home" ? ("w-25 pr-13") : ("w-6 bg-none pr-0 stroke-gray-500")} `} />
      {active === "home" ? (
        <h1 className="absolute top-2 left-21 flex text-white">Home</h1>
      ) : (null)}</Link>
      
      <Link to={"/"}><Srch onClick={() => setactive("search")} className={`w-6 h-6  h-8 py-[5px] rounded-xl bg-linear-to-b from-[#6C56F0] to-[#469FEF] transition-all duration-200 ${active === "search" ? ("w-25 pr-13 stroke-white") : ("w-6 bg-none pr-0 stroke-gray-500")} `} />
      {active === "search" ? (
        <h1 className="absolute top-2 left-38 flex text-white">Search</h1>
      ) : (null)}</Link>
      
      <Link to={"/message"}><Mssg onClick={() => setactive("message")} className={`w-6 h-6  stroke-2 h-8 py-[5px] rounded-xl bg-linear-to-b from-[#6C56F0] to-[#469FEF] transition-all duration-200 ${active === "message" ? ("w-30 pr-16 stroke-white") : ("w-6 bg-none pr-0 stroke-gray-500")} `} />
      {active === "message" ? (
        <h1 className="absolute top-2 left-54 flex text-white">Message</h1>
      ) : (null)}</Link>
      
      <Link to={"/"}><Setting onClick={() => setactive("setting")} className={`w-6 h-6 stroke-2 h-8 py-[5px] rounded-xl bg-linear-to-b from-[#6C56F0] to-[#469FEF] transition-all duration-200 ${active === "setting" ? ("w-25 pr-13 stroke-white ") : ("w-6 bg-none pr-0 stroke-gray-500")} `} />
      {active === "setting" ? (
        <h1 className="absolute top-2 left-72 flex text-white">Setting</h1>
      ) : (null)}</Link>
      
    </div>
  )
}

export default Menu;
