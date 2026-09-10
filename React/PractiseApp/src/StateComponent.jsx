import { useCallback, useMemo, useState } from "react"
import Sum from "./Sum";
import PostCard from "./PostCard";

const StateComponent = () => {

    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(100000)

    const handleCount = ()=>{
        setCount((prev)=>prev+1);
    }

    console.log("App Render")

    // const calculatePrime = (number)=>{
    //   let count = 0;

    // for (let i = 2; i <= number; i++) {
    //     let isPrime = true;

    //     for (let j = 2; j < i; j++) {
    //         if (i % j === 0) {
    //             isPrime = false;
    //             break;
    //         }
    //     }

    //     if (isPrime) {
    //         count++;
    //     }
    // }

    // return count;
    // }

    // without useMemo performing haveay comutation in component that is being re-render again and again slow the perform manch
    // but the computation result is same until the value change 
    // so use useMemo hook to memorize the result and value
    // it will only change on value change

    const prime = useMemo(()=>{
      let count = 0;

    for (let i = 2; i <= number; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    return count;
    },[number])


    // it remeber the function and do not create again
    // but we provide the dependency then it created again upon dependency value change

    const handleClick  = useCallback(()=>{
      console.log("Hello CallBack",count)
    },[count])

    const obj = useMemo(()=>{
      return {name: "Zulfiqar", age:20};
    },[])


  return (
    <div>
        <h1>{count}</h1>
        <button className="btn btn-success" onClick={handleCount}>Counter</button>

        <h3>Total Primes number : {prime} between 1 to {number}</h3>

        <Sum number={count}/>
        {/* <Sum/> this comonent should not be re-render because it is always static with result and it is heveay computational componant
        so here comes React.memo */}
        {/* but if we pass any prop and prop is static it will still not re-render only when prop change then again re-render
        like in my case count is dynamic on each click */}

        <button onClick={handleClick}>CallBack Button</button>

        <PostCard value = {obj} />

          {/* now there is on point to note that when we pass prop as object on re-render the object re-created with new reference so
          it will also re-render the Reacr.memo component so we must in this case use useMemo to memorize the object and pass same
          object again and again */}

          {/* same if you pass function it is also object so it will re-render child again so in that case
          use useCallBack hook */}
        

    </div>
  )
}

export default StateComponent