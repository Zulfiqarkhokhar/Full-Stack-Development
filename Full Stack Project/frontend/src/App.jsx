import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import Form from "./UserForm";

const App = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
  try {
    const res = await axios.get("http://localhost:8000/");
    const data = res.data;

    setData(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

  useEffect(()=>{

    const fetch =  async () => {
      await fetchData();
    }
    fetch()

  },[])


  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>

      <Form />

      {data.map(({name,age})=>(
        <div key={name}>
          <h1>Name: {name}</h1>
          <h1>Age: {age}</h1>
        </div>
      ))}
    </div>
  )
}

export default App