let a = "100";
let b = Number(a); // Type casting string to number

console.log("Type of a: " + typeof a);
console.log("Type of b: " + typeof b);

let c = 10;
let d = String(c); // Type casting number to string

console.log("Type of c: " + typeof c);
console.log("Type of d: " + typeof d);

console.log(String(undefined)); // Type casting undefined to string
console.log(String(true)); // Type casting boolean to string
console.log(String(null)); // Type casting null to string