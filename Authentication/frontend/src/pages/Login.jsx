import { useContext } from "react";
import { useState } from "react";
import { dataContext } from "../context/dataContext";
import axios from "axios";

const Login = () => {
  const {serverUrl} = useContext(dataContext);

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function handleSubmit(e){

        e.preventDefault();
        try {
            const res = await axios.post(`${serverUrl}/api/login`,{
            email,
            password
        },{withCredentials:true})
        console.log("User Logged In:",res)
        } catch (error) {
            alert(error.response.data.message)
        }
    }
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center px-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-5">


        {/* Heading */}
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Login
        </h2>

        {/* Signup Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
            value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
            value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition mt-1"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login