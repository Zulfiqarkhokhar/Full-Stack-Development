import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext';

export const UserDataContext = createContext();

const UserContext = ({children}) => {

    const [userData,setUserData] = useState(null);
    const [loading,setLoading] = useState(true);
    const {serverUrl} = useContext(authDataContext);

    const getCurrentUser = async () =>{
        try {
            let result = await axios.get(serverUrl+"/api/user/currentuser",{withCredentials:true});
            setUserData(result.data)
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getCurrentUser();
    },[])

    const value = {
        userData,setUserData,loading
    }
  return (
    <div>
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext