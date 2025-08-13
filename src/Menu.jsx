import { Link } from "react-router";

const Menu = () => {
  return (
    <div className='bg-white w-full absolute -bottom-0 h-10 fixed flex justify-between px-10 items-center font-bold '>
      <Link to={"/"}><h1>Home</h1></Link>
      <Link to={"/"}><h1>Home</h1></Link>
      <Link to={"/"}><h1>Home</h1></Link>
    </div>
  )
}

export default Menu;