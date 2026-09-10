import React from 'react'

// with react memo we make it independent of other compnent to re-render again

 const Sum = React.memo(({number})=>{ 

    const sumOfNaturalNumbers = (number) =>{
        let sum = 0;
        for(let i=1;i<=number;i++){
            sum +=i;
        }

        return sum;
    }

    const result = sumOfNaturalNumbers(number);

    console.log("Sum Render")


  return (
    <div>
        <h1>Sum of {number} Natural Numbers</h1>
        <h2>Total: {result}</h2>
    </div>
  )
})

export default Sum