import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/dashboard");
    }

  return (
    <div>
        <h1>Home</h1>
        <button onClick={handleClick}>Go To Dashboard</button>
    </div>
  )
}

export default Home