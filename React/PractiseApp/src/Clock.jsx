import { useEffect, useState } from "react"

const Clock = () => {

    const [time,setTime] = useState(new Date().toLocaleTimeString());

    const [show,setShow] = useState(true);

    useEffect(()=>{

        if(!show){
            return;
        }

       const intervalId =  setInterval(()=>{
            setTime(new Date().toLocaleTimeString()); // this interval will be only given the web api once. if we call it without useEffect then it go again and again on re-render
            console.log("hi")
        },1000)

        return ()=>{
            clearInterval(intervalId); // this return for useEffect only execute when dependency value chage then imediately before it
        }
    },[show])

  return (
    <div>

        <h1>My Clock</h1>
        <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
        {
            show&&<h2>Time: {time}</h2>
        }
    </div>
  )
}

export default Clock