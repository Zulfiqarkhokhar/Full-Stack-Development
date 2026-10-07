import React, { useContext, useState } from 'react'
import logo2 from "../assets/logo2.png"
import { IoSearchSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import dp from "../assets/dp.png"
import { UserDataContext } from '../context/UserContext';


const Nav = () => {

    const [isActive,setIsActive] = useState(false);
    const {userData} = useContext(UserDataContext);

  return (
    <div className='w-full h-[80px] bg-[white] fixed top-0 shadow-lg flex justify-between md:justify-around items-center px-[10px]'>
        <div className='flex justify-center items-center gap-[10px]'>
            <div onClick={()=>setIsActive(false)}>
                <img src={logo2} alt="logo" className='w-[50px]' />
            </div>
            {!isActive && <div><IoSearchSharp className='w-[23px] h-[23px] text-gray-600 lg:hidden' onClick={()=>setIsActive(true)}/></div>}
                <form className={`w-[180px] lg:w-[350px] h-[40px] bg-[#f3f2ec] lg:flex items-center gap-[10px] px-[10px] py-[5px] rounded-md ${!isActive?"hidden":"flex"}`}>
                <div><IoSearchSharp className='w-[23px] h-[23px] text-gray-600' /></div>
                <input type="text" className='w-[80%] h-full bg-transparent outline-none border-0' placeholder='search users...'/>
                </form>
        </div>
        <div className='flex justify-center items-center gap-[20px] relative'>
            <div className='w-[300px] h-[300px] bg-[white] shadow-lg absolute top-[75px] rounded-lg flex flex-col items-center p-[20px] gap-[20px]'>
                <div className='w-[70px] h-[70px] rounded-full overflow-hidden'>
                <img src={dp} alt="profile" />
            </div>
            <div className='text-[18px] font-semibold text-gray-700'>{`${userData.firstName} ${userData.lastName}`}</div>
            </div>
            <div className='lg:flex flex-col items-center justify-center text-gray-600 hidden'>
                <IoHomeSharp className='w-[23px] h-[23px] text-gray-600'/>
                <div>Home</div>
            </div>
            <div className='lg:flex flex-col items-center justify-center text-gray-600 hidden'>
                <HiUsers className='w-[23px] h-[23px] text-gray-600' />
                <div>My Networks</div>
            </div>
            <div className='flex flex-col items-center justify-center text-gray-600'>
                <IoNotifications className='w-[23px] h-[23px] text-gray-600' />
                <div className='hidden md:block'>Notifications</div>
            </div>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                <img src={dp} alt="profile" />
            </div>
        </div>
    </div>
  )
}

export default Nav