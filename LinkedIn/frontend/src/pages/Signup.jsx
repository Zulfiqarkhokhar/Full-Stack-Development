import { useState } from "react"
import logo from "../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
const Signup = () => {

    const {userData,setUserData} = useContext(UserDataContext);
    const [show,setShow] = useState(false);
    const [userDetail,setUserDetail] = useState({
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:""
    })
    const [loading,setLoading] = useState(false);
    const [err,setErr] = useState("");
    const {serverUrl} = useContext(authDataContext);
    const navigate = useNavigate();

    const handleChange = (e) =>{

        const {name,value} = e.target;

        setUserDetail(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSingUp = async (e) =>{
        e.preventDefault();
        setLoading(true);
        try {
            const result = await axios.post(serverUrl+"/api/auth/signup",userDetail,{withCredentials:true})
            if (result.status === 201) {
                setUserData(result.data)
                setLoading(false);
                setErr("")
            setUserDetail({
                firstName: "",
                lastName: "",
                userName: "",
                email: "",
                password: ""
            });

            console.log("Signup successful");
        }
        } catch (error) {
            setLoading(false);
            setErr(error.response.data.message);
        }
    }

  return (
    <div className="w-full h-screen bg-[white] flex flex-col justify-start items-center gap-[10px]">
        <div className="p-[20px] lg:p-[15px] w-full flex items-center">
            <img src={logo} alt="logo" />
        </div>
        <form onSubmit={handleSingUp} className="w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center gap-[10px] p-[15px]">
            <h1 className="text-gray-800 text-[30px] font-semibold mb-[30px]">Sign Up</h1>
            <input type="text" name="firstName" value={userDetail.firstName} onChange={handleChange} placeholder="firstname" required className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md" />
            <input type="text" name="lastName" value={userDetail.lastName} onChange={handleChange} placeholder="lastname" required className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"/>
            <input type="text" name="userName" value={userDetail.userName} onChange={handleChange} placeholder="userame" required className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"/>
            <input type="email" name="email" value={userDetail.email} onChange={handleChange} placeholder="email" required className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"/>
            <div className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] rounded-md relative">
                <input type={show?"text":"password"} name="password" value={userDetail.password} onChange={handleChange} placeholder="password" required className="w-full h-full border-none text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"/>
                <span className="absolute right-[20px] top-[10px] text-[#0A66C2] font-semibold cursor-pointer" onClick={()=>setShow(prev=>!prev)}>{show?"hide":"show"}</span>
            </div>
            {err && <p className="text-center text-red-500">*{err}</p>}
            <button type="submit" className="w-[100%] h-[50px] rounded-full bg-[#0A66C2] mt-[30px] text-white" disabled={loading}>{loading?"Loading...":"Sign Up"}</button>
            <p className="text-center cursor-pointer" onClick={()=>navigate("/login")}>Already have an account ? <span className="text-[#0A66C2]">Sign In</span></p>
        </form>

    </div>
  )
}

export default Signup