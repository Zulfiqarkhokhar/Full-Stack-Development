// hoisting is machenism of javascript where memory allocation for variable functions are done before execution phase in 
// execution context to know the existence of varriable and functions

// var type variable are assigned undefined
// let and const are assinged <uninitialized> temporal dead zone
// function are pointend to function code
// function expression or arrow function are handled as variable also

console.log(a);// undefined
var a = 10;

console.log(b); // cannot access 
const b = 20;

console.log(c);// cannot access
let c = 30;

/// same goes with functions
