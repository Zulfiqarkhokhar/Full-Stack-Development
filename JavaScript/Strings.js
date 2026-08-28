let str = "hello";
let str1 = 'WORLD';
let str2 = `new way to create string with backstack`;

let age = 10;

console.log(`I am ${age} year old`);

console.log(str2.length)

console.log(str.toUpperCase()); // return to upper case but not change the actual value
console.log(str1.toLowerCase());

let str3 = "Hello Coder Army Coder";

console.log(str3.indexOf("Cod")); // return first index, case sensitive
console.log(str3.lastIndexOf("Cod")); // return last index found for given value, case sensitive
console.log(str3.includes("coder")); // return true false if present or not, case sensitive

let str4 = `Zulifkar`;

console.log(str4.replaceAll("ifkar","fiqar"))

// trim important for form handling etc

let str5 = "    ali  ";

console.log(str5);
console.log(str5.trim())

let str6 = "Orange,Mango,Apple,Banana,Peach";

let fruits = str6.split(",");
console.log(fruits)
