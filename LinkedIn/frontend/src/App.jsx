import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useContext } from "react"
import { UserDataContext } from "./context/UserContext"

const App = () => {
  
  const {userData,loading} = useContext(UserDataContext);

  if(loading){
    return <></>
  }

  return (
    <Routes>
      <Route path="/" element={userData?<Home/>:<Navigate to="/login"/>}/>
      <Route path="/login" element={userData?<Navigate to="/"/>:<Login/>}/>
      <Route path="/signup" element={userData?<Navigate to="/"/>:<Signup/>}/>
    </Routes>
  )
}

export default App