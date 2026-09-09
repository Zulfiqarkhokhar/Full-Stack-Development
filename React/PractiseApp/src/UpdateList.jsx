import { useState } from "react"

const UpdateList = () => {

    const [fruits,setFruits] = useState(["Apple","Mango"]);

    function handleClick(){
        // if you push new fruit to fruits it will add into array
        // but problem is it will compare the references of both VDOM array will be same so result will not be update in real dom
        // like this
        // fruits.push("Banana");
        // setFruits(fruits);
        // console.log(fruits)

        // we must pass complete new array with old one using spread operator

        setFruits([...fruits,"Banana"]);

        // so always remember to update the non-primitive type use spread
    }


  return (
    <div>
        <h1>Update list</h1>
        {
            fruits.map((fruit)=>(
                <h5>{fruit}</h5>
            ))
        }

        <button onClick={handleClick}>Add New Fruit</button>
    </div>
  )
}

export default UpdateList