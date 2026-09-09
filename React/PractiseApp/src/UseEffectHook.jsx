import { useEffect, useState } from "react"

const UseEffectHook = () => {

    const [users,setUsers] = useState([]);

    // this useEffect hook only be called once if dependency array is empty
    // but if you pass any state then that state change useEffect run also

    // like input for how many user I want so it will re-render it

    const [value,setValue] = useState(30);

    useEffect(()=>{

        const getUsers = async() =>{
            const response = await fetch(`https://api.github.com/users?per_page=${value}`)
            const data = await response.json();
            setUsers(data);

        }

        getUsers();
    
    },[value]) // this is dependency array

  return (
    <div>
        <h1>Github Users</h1>

        <label htmlFor="number">How Many Profiles?</label>
        <input type="number" id="number" onChange={(e)=>{setValue(e.target.value)}} />

        <div style={{display:"flex", justifyContent:'center', alignItems:"center", flexWrap:"wrap", gap:"10px"}}>
            {
                users.map(user=>(
                    <img width={"100px"} height={"100px"} key={user.login} src={user.avatar_url} alt={user.avatar_url} />
                ))
            }
        </div>

    </div>
  )
}

export default UseEffectHook