import search from './assets/search.svg';
import Menu from './Menu.jsx';

const Profile = ({title, photo, dola}) => {
    return (
        <div className="h-15 flex w-[100%] relative">
            <div className='w-10 h-10 bg-blue-500 absolute mt-3 ml-5 rounded-full '></div>
            <div className='absolute'>
                <h1 className='font-bold ml-20 mt-3'>{title}</h1>
                <h1 className='ml-20 -mt-2'>{title}</h1>
            </div>
            <h1 className='text-end mr-5 mt-5 font-bold absolute -right-78'>{dola}</h1>
        </div>
    )
}

const TransferReport = () => {
  return (
    <div>
        <div className="bg-white drop-shadow-md/30 w-[80%] flex justify-center mx-auto h-[100vh] rounded-tl-[20px] rounded-tr-[20px]">
        <h1 className="flex mr-auto relative left-2 top-2 font-bold">Recent Transaction</h1>
        <img src={search} alt="search" className='w-5 absolute top-3 right-3' />

        <div className='flex absolute gap-4 left-0 flex-col mt-10'>
            <Profile title="netflix" dola="-$10.00" />
            <Profile title="netflix" dola="-$10.00" />
            <Profile title="netflix" dola="-$10.00" />
            <Profile title="netflix" dola="-$10.00" />
            <Profile title="netflix" dola="-$10.00" />
            <Profile title="netflix" dola="-$10.00" />
            <Profile title="netflix" dola="-$10.00" />
        </div>

     
        </div>
        <Menu />
    </div>
  );
}   

export default TransferReport;