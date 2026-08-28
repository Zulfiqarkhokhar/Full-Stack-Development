let a = 10;
let b = 34.6794;

let c = b.toFixed(2); // toFixed return the string and does not change the value of b

console.log(c)

let d = b.toString();

console.log(typeof d, d);
console.log(typeof b, b)

b = b.toString();

console.log(typeof b, b)

// Math 

console.log(Math.abs(-10));

console.log(Math.PI);
console.log(Math.round(Math.random()*10))