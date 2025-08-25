import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../backEnd/firebase/firebase";
import LandingPage from "./landingPage";
import LoginImage from "../assets/login-image.svg"

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login sukses!");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="flex flex-col gap-3 w-80 mx-auto mt-20">
//       <h2 className="text-2xl font-bold">Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         className="border p-2 rounded"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="border p-2 rounded"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {error && <p className="text-red-500">{error}</p>}
//       <button className="bg-green-500 text-white p-2 rounded">Login</button>
//     </form>
//   );
// }

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,  setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login sukses!");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>   
            <LandingPage />

            <div className="absolute bg-white top-0 mt-20 w-full h-full rounded-[30px] p-5 px-15">
                <h1 className="font-bold text-blue-600 text-[30px]">Welcome Back</h1>
                <h1 className="font-[500] text-[15px]">Hello there, sign in to continue</h1>
                <img src={LoginImage} alt="iamge" className="mx-auto relative top-10" />

                <form onSubmit={handleLogin}>
                    <div className="relative w-full">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="border-1 w-full left top-20 relative h-10 rounded-xl pl-5" placeholder="email"  />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border-1 w-full left top-25 relative h-10 rounded-xl pl-5" placeholder="password"  />
                        <h1 className="absolute right-0 top-45 font-[500] text-gray-500 text-[15px]">forgot your password?</h1>
                    </div>
                    {error && <p className="text-red-500 absolute bottom-47" >{error}</p>}
                    <button className="bg-gray-300 text-white h-10 w-full rounded-lg mt-40">Sign in</button>
                </form>
                
                <h1 className="text-center">dont have an account? <span className="font-bold text-blue-600">Sign-in</span></h1>
            </div>
        </div>
    )
}

export default Login;