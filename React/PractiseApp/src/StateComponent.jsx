import { useState } from "react"

const StateComponent = () => {

    const [count,setCount] = useState(0);

    const handleCount = ()=>{
        setCount((prev)=>prev+1);
    }


  return (
    <div>
        <h1>{count}</h1>
        <button className="btn btn-success" onClick={handleCount}>Counter</button>
    </div>
  )
}

export default StateComponent