import { useRef, useState } from "react"

const StopWatch = () => {

    const [time,setTime] = useState(0);
    let intervalIdRef = useRef(null);
    // useRef remebers the value of previous and on re-render it does not re-assign the value but persist same old value until 
    // we manually make it null

    const handleStart = ()=>{
        
        if(intervalIdRef.current != null){
            return;
        }

        intervalIdRef.current =  setInterval(()=>{
            setTime(time=>time+1);
        },1000)
    }

    const handleStop = () =>{

        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;

    }

    const handleReset = () =>{

        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        setTime(0);
    }


  return (
    <>
    <h1>StopWatch : {time}</h1>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default StopWatch