// scope

let a = 20;
const b = 30;
var c = 100; // this is global here

// here let and const are gobal level

if(true){ // accessible in block
    console.log(a);
    console.log(b);

    let d = 40;
    const e = 50;
    // now they become block level not accessible out side of it

    var f = 200; // also global in block accessible outside also
}
console.log(f)
function sayHello(){ // accessible to function as well
    console.log(a);
    console.log(b);
     let d = 40;
    const e = 50;

    // now function level only accessible here

    var g = 300; // this is not global only here
}


// A closure is a feature in JavaScript where an inner function retains access 
// to the variables and scope of its outer function, even after the outer function has finished executing

function incrementCounter(){
    
    let num = 0; // this is num is moved to heap after outer function finished execution because inner use it and inner execution yet remain
    function increment(){
        num++;
        return num;
    }

    return increment;
}

const counter = incrementCounter();

console.log(counter());
console.log(counter());
console.log(counter());