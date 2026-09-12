// import Clock from "./Clock";
// import Login from "./Login";
// import MyButton from "./MyButton";
// import MyComponent from "./MyComponent";
// import StateComponent from "./StateComponent";
// import StopWatch from "./StopWatch";
// import UpdateList from "./UpdateList";
// import UseEffectHook from "./UseEffectHook";

// import Form from './Form'
// import ZodForm from './ZodForm';

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Pages/Navbar";
import Student from "./Pages/Student";

const routes = createBrowserRouter([
  {
    path:'/',
    element: <div><Navbar/><Home/></div>
  },
  {
    path:'/about',
    element:<div><Navbar/><About/></div>
  },
  {
    path:'/dashboard',
    element:<div><Navbar/><Dashboard/></div>
  },
  {
    path:'/student/:id',
    element:<div><Navbar/><Student/></div>
  },

])

function App(){
  return <div style={{display:"flex", justifyContent:'center', alignItems:'center',backgroundColor:"black", color:"white"}}>
    {/* <h1>This is React Practise Project</h1>
    <MyButton/>
    <MyComponent/>
    <StateComponent/>
    <UseEffectHook/>

    <Clock/>

    <UpdateList/>

    <StopWatch/>

    <Login/> */}

    {/* <Form/> */}
    {/* <ZodForm/> */}

{/* <Nabar/> */}

    <RouterProvider router={routes}/>
  </div>
}

export default App;