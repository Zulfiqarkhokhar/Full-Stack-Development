import { useState } from "react";

const App = () => {

  const [data, setData] = useState({});

  const handleClick = async () =>{
    
    try{
        const res = await fetch("http://localhost:8000/");
        const data = await res.json();
        setData(data);
    }catch(err){
      console.log(err)
    }


  }


  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      <h1>Name: {data.name}</h1>
      <h1>Age: {data.age}</h1>
    </div>
  )
}

export default App