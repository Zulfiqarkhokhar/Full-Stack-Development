import { useState } from "react"
import dp from "../assets/dp.png"
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import axios from "axios";

const Signup = () => {

    const {serverUrl} = useContext(dataContext);

    console.log(serverUrl)

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function handleSubmit(e){

        e.preventDefault();

        try {
            await axios.post(`${serverUrl}/api/signup`,{
            firstName,
            lastName,
            userName,
            email,
            password
        })
        console.log("User Created")
        } catch (error) {
            console.log("Error: ",error)
        }


    }


  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center px-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-5">

        {/* Profile Image */}
        <div className="flex justify-center mb-3">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow flex items-center justify-center overflow-hidden">
              <img
                src={dp}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hover Plus */}
            <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-3xl font-light">+</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Create Account
        </h2>

        {/* Signup Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>

          {/* First Name + Last Name */}
          <div className="grid grid-cols-2 gap-3">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
                type="text"
                placeholder="First name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
                type="text"
                placeholder="Last name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
            value={userName}
              onChange={(e)=>setUserName(e.target.value)}
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

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

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition mt-1"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  )
}

export default Signup

