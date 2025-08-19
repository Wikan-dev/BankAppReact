import image from './assets/wd-ilustrasi.svg'
import { Link } from 'react-router'

const SuccesWd = () => {
    return (
        <div className='m-10 flex justify-center flex-col'>
            <img src={image} />
            <h1 className='text-center text-blue-800 font-bold text-[25px] mt-10 mb-5'>Successful withdrawal!</h1>
            <h1 className='text-center'>You have successfully withdrawn money! Please check the balance in the card management section.</h1>

            <Link to='/'>
            <button className='bg-linear-to-b from-[#469FEF] to-[#6C56F0] w-full h-10 rounded-lg  mt-10 text-white hover:scale-110 transition-all duration-100'>Confirm</button>
            </Link>
        </div>
    )
}

export default SuccesWd