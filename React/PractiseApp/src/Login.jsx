import { useRef } from "react"

const Login = () => {

    const emailRef = useRef(null);
    const passRef = useRef(null);

    const handleSubmit = (e)=>{

        e.preventDefault();

        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    }
// here useRef prevent use from re-render on each input keypress because it directly point the real dom element
  return (
    <>
    <h1>Login Form</h1>
    <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef}/>
    <input type="password" ref={passRef}/>
    <button type="submit">submit</button>
    </form>
    </>
  )
}

export default Login