import shape from './assets/Shape.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import internet from './assets/internet.svg';
import electric from './assets/electric.svg';
import water from './assets/water.svg';
import Menu from './Menu';

const Company = ({companyName, onSelecet}) => {
    return (
        <div className='bg-white w-full border-1 border-gray-500 rounded-lg' onClick={() => onSelecet(companyName)}>
            <h1 className='font-bold pl-3 pt-2 h-10'>{companyName}</h1>
        </div>
    )
}

const WaterBill = ({setWBill}) => {
    // const [showCom, setShowCom] = useState(false);
    const [billCode, setBillCode] = useState("");
    const code = useRef(null);
    const navigate = useNavigate();

    // const codeValue = code.current.value;
    
    // useEffect(() => {
    //     if (billCode !== "") {
    //         setBillCode(false);
    //     } else {
    //         setBillCode(true);
    //     }

    //     console.log(billCode);
    // }, [billCode])

    function handleBack() {
        setWBill(false);
    }

    function handleBill() {
        if (billCode !== "") {
            navigate('/bill',  { state: {billCode, title : "Water bill"} });
        } else {
            alert("input not valid");
        }
    }

    return (
        <div className='bg-white absolute top-0 left-0 w-full h-[100vh] z-10 p-5'>
                <div>
                    <img onClick={handleBack} className="w-3" src={shape} alt="" />
                    <h1 className="relative bottom-7 ml-10 font-bold text-[25px]">Water Bill</h1>
                </div>
            <div className='bg-white p-5 rounded-xl drop-shadow-xl/20 z-20'>
                
                <div className='my-5'>
                    <h1 className='font-[500] text-gray-500 '>Type internet bill code</h1>
                    <input onChange={(e) => setBillCode(e.currentTarget.value)} value={billCode} ref={code} className='mt-2 bg-white w-full pl-3 h-10 rounded-lg border-gray-600 border-1' type="text" placeholder='Bill code' />
                </div>
                <h1>Please enter the correct bill code to check information.</h1>
                <button onClick={handleBill} className={`'bg-gray-200 w-full h-10 text-white rounded-lg mt-2' ${billCode ? "bg-red-500" : "bg-gray-300"}`} >Check</button>
            </div>
            <Menu></Menu>
        </div>
    )
}

const InternetBill = ({setIlBill}) => {
    const [showCom, setShowCom] = useState(false);
    const [billCode, setBillCode] = useState("");
    const [inputValue, setInputValue] = useState("");
    const code = useRef(null);
    const companyInput = useRef(null);
    const companyValue = 10;
    const navigate = useNavigate();
    
    function handleInputCompany(name) {
        setInputValue(name);
        setShowCom(false);
    }

    // const codeValue = code.current.value;
    
    // useEffect(() => {
    //     if (billCode !== "") {
    //         setBillCode(false);
    //     } else {
    //         setBillCode(true);
    //     }

    //     console.log(billCode);
    // }, [billCode])



    function handleCompany() {
        setShowCom(prev => !prev);
    }

    function handleBack() {
        setIlBill(false);
    }

    function handleBill() {
        if (billCode !== "") {
            navigate('/bill',  { state: {billCode, title : "Internet bill"} });
        } else {
            alert("input not valid");
        }
    }

    return (
        <div className='bg-white absolute top-0 left-0 w-full h-[100vh] z-10 p-5'>
                <div>
                    <img onClick={handleBack} className="w-3" src={shape} alt="" />
                    <h1 className="relative bottom-7 ml-10 font-bold text-[25px]">Internet Bill</h1>
                </div>
            <div className='bg-white p-5 rounded-xl drop-shadow-xl/20 z-20'>
                
                <div className='my-5'>
                    <h1 className='font-[500] text-gray-500 '>Type internet bill code</h1>
                    <input onChange={(e) => setBillCode(e.currentTarget.value)} value={billCode} ref={code} className='mt-2 bg-white w-full pl-3 h-10 rounded-lg border-gray-600 border-1' type="text" placeholder='Bill code' />
                </div>
                <h1>Please enter the correct bill code to check information.</h1>
                <button onClick={handleBill} className={`'bg-gray-200 w-full h-10 text-white rounded-lg mt-2' ${billCode ? "bg-red-500" : "bg-gray-300"}`} >Check</button>
            </div>
            <Menu></Menu>
        </div>
    )
}

const ElectricBill = ({setElBill}) => {
    const [showCom, setShowCom] = useState(false);
    const [billCode, setBillCode] = useState("");
    const [inputValue, setInputValue] = useState("");
    const code = useRef(null);
    const companyInput = useRef(null);
    const companyValue = 10;
    const navigate = useNavigate();
    
    function handleInputCompany(name) {
        setInputValue(name);
        setShowCom(false);
    }

    // const codeValue = code.current.value;
    
    // useEffect(() => {
    //     if (billCode !== "") {
    //         setBillCode(false);
    //     } else {
    //         setBillCode(true);
    //     }

    //     console.log(billCode);
    // }, [billCode])



    function handleCompany() {
        setShowCom(prev => !prev);
    }

    function handleBack() {
        setElBill(false);
    }

    function handleBill() {
        if (inputValue !== "" && billCode !== "") {
            navigate('/bill',  { state: {billCode, title : "Electric bill"} });
        } else {
            alert("input not valid");
        }
    }

    return (
        <div className='bg-white absolute top-0 left-0 w-full h-[100vh] z-10 p-5'>
                <div>
                    <img onClick={handleBack} className="w-3" src={shape} alt="" />
                    <h1 className="relative bottom-7 ml-10 font-bold text-[25px]">Electric Bill</h1>
                </div>
            <div className='bg-white p-5 rounded-xl drop-shadow-xl/20 z-20'>
                <input className='bg-white w-full pl-3 h-10 rounded-lg border-gray-600 border-1 font-bold' type="text" readOnly placeholder='Chose company' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleCompany} ref={companyInput} value={companyValue} className=' w-full h-10 absolute left-0'><img className='absolute right-10 top-3 -rotate-90' src={shape} alt="" /></button>
                {showCom ? (
                    <div className='absolute w-[90%] flex gap-5 flex-col bg-white p-5 overflow-auto h-50'>
                    <Company companyName="pln"  onSelecet={handleInputCompany}/>
                    <Company companyName="company 1"  onSelecet={handleInputCompany}/>
                    <Company companyName="company 2"  onSelecet={handleInputCompany}/>
                    <Company companyName="company 3"  onSelecet={handleInputCompany}/>
                    <Company companyName="pln" onSelecet={handleInputCompany}/>
                </div>
                ) : (<div />)}
                <div className='my-5'>
                    <h1 className='font-[500] text-gray-500 '>Type internet bill code</h1>
                    <input onChange={(e) => setBillCode(e.currentTarget.value)} value={billCode} ref={code} className='mt-2 bg-white w-full pl-3 h-10 rounded-lg border-gray-600 border-1' type="text" placeholder='Bill code' />
                </div>
                <h1>Please enter the correct bill code to check information.</h1>
                <button onClick={handleBill} className={`'bg-gray-200 w-full h-10 text-white rounded-lg mt-2' ${billCode ? "bg-red-500" : "bg-gray-300"}`} >Check</button>
            </div>

            <Menu></Menu>
        </div>
    )
}

const Container = ({title, description, image, clickFunc}) => {
    return (
        <div onClick={clickFunc} className='bg-white drop-shadow-xl/10 flex flex-row justify-between p-3 rounded-lg'>
            <div>
                <h1 className='font-bold text-[20px]'>{title}</h1>
                <h1 className='text-gray-500'>{description}</h1>
            </div>
            <img src={image} alt="" />
        </div>
    )
}

    const PayBill = () => {
    const [elBill, setElBill] = useState(false);
    const [ilBill, setIlBill] = useState(false);
    const [wlBill, setWlBill] = useState(false);

    function handleElectric() {
        setElBill(true);
        console.log(elBill)
    }

    function handleInternet() {
        setIlBill(true);
        console.log("succes")
    }

    function handleWater() {
        setWlBill(true);
        console.log("succes")
    }

    return(
        <div className='m-5'>
            {elBill ? (
                <ElectricBill setElBill={setElBill} />
            ) : <div />}
            {ilBill ? (
                <InternetBill setIlBill={setIlBill} />
            ) : <div />}
            {wlBill ? (
                <WaterBill setIlBill={setWlBill} />
            ) : <div />}

            <div>
                <Link to='/'><img className="w-3" src={shape} alt="" /></Link>
                <h1 className="relative bottom-7 ml-10 font-bold text-[25px]">Confirm</h1>
            </div>
            <div className='flex gap-10 flex-col'>
                <Container clickFunc={handleElectric} title="Electric bill" description="Pay electric bill this month" image={electric} />
                <Container clickFunc={handleWater} title="Water bill" description="Pay Water bill this month" image={water} />
                <Container clickFunc={handleInternet} title="Internet bill" description="Pay internet bill this month" image={internet} />
            </div>
            <Link to='/TransferHistory'><h1 className='font-bold text-gray-600 mt-2'>check payment history</h1></Link>
            <Menu />
        </div>
    )
}

export default PayBill;