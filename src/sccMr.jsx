import mr from './assets/mr.svg';
import { Link } from 'react-router-dom';

const SuccesMr = () => {
    return (
        <div className='m-5 mt-20'>
            <img src={mr} alt="image" />
            <div className='text-center'>
                <h1 className='font-bold text-blue-600 text-[20px]'>
                    Recharge Succes
                </h1>
                <h1>
                    You have successfully paid mobile prepaid!
                </h1>
            </div>

             <Link to="/"><button className='bg-linear-to-b from-[#469FEF] to-[#6C56F0] w-[80%] h-10 mx-auto flex justify-center pt-2 rounded-lg mt-10 text-white hover:scale-110 transition-all duration-100'>Continue</button></Link>
        </div>
    )
}

export default SuccesMr;