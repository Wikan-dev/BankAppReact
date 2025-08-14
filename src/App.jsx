import Multi from './assets/Multi.svg';
import icon1 from './assets/Vector.png';
import icon2 from './assets/Group2.svg';
import icon3 from './assets/Group.png';
import icon4 from './assets/Group4.svg';
import icon5 from './assets/Group3.svg';
import icon6 from './assets/Group.svg';
import icon7 from './assets/Group5.svg';

import Menu from './Menu.jsx';
import { UserData } from './assets/data/data.js';
const Data = Object.values(UserData);
const currentUser = Data.find(user => user.id === 1);

import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Transfer from './Transfer.jsx';
import TransferReport from './TransferReport';
import TransferProces from './tfProces.jsx';

const MiniCard = ({image, title}) => {
  return (
    <div className='bg-white drop-shadow-md w-23 h-23 p-2 rounded-[15px]'>
      <img className='flex mx-auto' src={image} alt="image" />
      <h1 className='text-center text-black/50'>{title}</h1>
    </div>
  )
}

const Home = () => {


  return (
    <div className='px-2 pt-10 bg-[#FFFDFF]'>
        <h1 key={currentUser.id} className='font-bold text-[35px] ml-2'>GOOD MORNING, {currentUser.nama}</h1>
      <div className='flex justify-center relative'>
          <div key={currentUser.uniqueKey} className='text-white'>
            <h1 className='absolute top-12 left-12 text-[30px]'>{currentUser.nama}</h1>
            <h1 className='absolute top-45 left-12 text-[20px] font-bold'>{currentUser.saldo}</h1>
            <h1 className='absolute top-38 left-12'>{currentUser.nomer}</h1>
            <h1 className='absolute top-30 left-12'>{currentUser.tipe}</h1>
          </div>
        <img src={Multi} alt="card" />
      </div>

      <div className='flex flex-wrap gap-5 justify-center mt-5 mb-20'>
        <MiniCard image={icon1} title="Account and Card" />
        <Link to='/Transfer'><MiniCard image={icon2} title="Transfer" /></Link>
        <MiniCard image={icon3} title="Withdraw" />
        <MiniCard image={icon4} title="Credit Card" />
        <MiniCard image={icon5} title="Pay the bill" />
        <MiniCard image={icon6} title="Mobile Recharge" />
        <Link to={"/transferReport"}><MiniCard image={icon7} title="Transfer Report" /></Link>
      </div>
      <div className='absolute -left-0 bottom-0'>
        <Menu />
      </div>
    </div>

  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transferReport" element={<TransferReport />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path='/tfProces' element={<TransferProces />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;