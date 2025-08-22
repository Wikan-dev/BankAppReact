import Multi from './assets/Multi.svg';
import icon1 from './assets/Vector.png';
import icon2 from './assets/Group2.svg';
import icon3 from './assets/Group.png';
import icon4 from './assets/Group4.svg';
import icon5 from './assets/Group3.svg';
import icon6 from './assets/Group.svg';
import icon7 from './assets/Group5.svg';

import Menu from './Menu.jsx';

// megimpor json sesuai id
import { UserData } from '../backEnd/data/data.js'
const Data = Object.values(UserData);
const currentUser = Data.find(user => user.id === 1); //mengambil data dari json sesuai id

import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Transfer from './Transfer.jsx';
import TransferReport from './TransferReport';
import TransferProces from './tfProces.jsx';
import Account from './account.jsx';
import MainHistory from './TransferHistory.jsx'
import Card from './Card.jsx';
import Withdraw from './withdraw.jsx';
import SuccesWd from './sccWd.jsx';
import MobileRecharge from './mobileRecharge.jsx';
import SuccesMr from './sccMr.jsx';
import PayBill from './payBill.jsx';
import Bill from './bill.jsx';
import Message from './message.jsx';
import StockData from './stock.jsx';

const MiniCard = ({image, title}) => {
  return (
    <div className='bg-white drop-shadow-md w-23 h-23 p-2 rounded-[15px]'>
      <img className='flex mx-auto' src={image} alt="image" />
      <h1 className='text-center text-black/50'>{title}</h1>
    </div>
  )
}

const Home = ({date}) => {
  const time = new Date();
  const today = time.getHours();

  if (today < 12) {
    date = "morning";
  } else if (today > 12 && today < 18) {
    date = "afternoon";
  } else if (today > 18 && today < 1) {
    date = "night";
  } 

  return (
    <div className='px-2 pt-10 bg-[#FFFDFF]'>
        <h1 className='font-bold text-[35px] ml-5'>GOOD {date}, {currentUser.nama}</h1>
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
        <Link to="/account"><MiniCard image={icon1} title="Account and Card" /></Link>
        <Link to='/Transfer'><MiniCard image={icon2} title="Transfer" /></Link>
        <Link to="/Withdraw"><MiniCard image={icon3} title="Withdraw" /></Link>
        <MiniCard image={icon4} title="Credit Card" />
        <Link to='/payBill'><MiniCard image={icon5} title="Pay the bill" /></Link>
        <Link to='/mobileRecharge'><MiniCard image={icon6} title="Mobile Recharge" /></Link>
        <Link to={"/TransferHistory"}><MiniCard image={icon7} title="Transfer Report" /></Link>
      </div>
      <div className='absolute -left-0 bottom-0'>
        <Menu />
      </div>
    </div>

  );
}

const App = () => {
  return (
    <BrowserRouter basename='/BankAppReact'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transferReport" element={<TransferReport />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path='/tfProces' element={<TransferProces />} />
        <Route path='/account' element={<Account />} />
        <Route path='/TransferHistory' element={<MainHistory />} />
        <Route path='/Card' element={<Card />} />
        <Route path='/withdraw' element={<Withdraw />} />
        <Route path='/sccWd' element={<SuccesWd />} />
        <Route path='/mobileRecharge' element={<MobileRecharge />} />
        <Route path='/sccmr' element={<SuccesMr />} />
        <Route path='/payBill' element={<PayBill />} />
        <Route path='/bill' element={<Bill />} />
        <Route path='/message' element={<Message />} />
        <Route path='/stock' element={<StockData />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
