import lp from '../assets/landingPage.svg';
import shape from '../assets/Shape.svg';

const LandingPage = () => {
    return(
        <div className="bg-linear-to-b from-[#469FEF] to-[#6C56F0] h-[100vh] p-5">
            <img src={lp} alt="image" className='w-70 mx-auto relative top-30' />

            <div className='absolute bottom-30 text-white'>
                <h1 className='font-bold'>Welcome to Bank App</h1>
                <h1>Ut enim ad minima veniam, quis nostrum exercitat
                    ionem ullam corporis suscipit laboriosam,
                </h1>
            </div>

            <button className='w-15 h-15 bg-white rounded-full absolute right-10 bottom-10'><img className='mx-auto rotate-180' src={shape} alt="go" /></button>
        </div>
    )
}

export default LandingPage;