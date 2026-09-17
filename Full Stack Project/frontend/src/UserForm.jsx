import axios from "axios";
import { useState } from "react"

const UserForm = () => {

   const [name,setName] = useState("");
   const [age,setAge] = useState(0);

   async function handleSubmit(e){
    e.preventDefault();
    const user = {
        name:name,
        age:age
    }

    const res = await axios.post("http://localhost:8000/addUser",{
        ...user
    })

    console.log(res)



   }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={(e)=>setName(e.target.value)} />
        <br />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={(e)=>setAge(e.target.value)} />
        <button type="submit">Send Data</button>
    </form>
    </>
  )
}

export default UserForm