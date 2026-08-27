let name = "Zulfiqar";
let age = 25;

console.log("Name: " + name);
console.log("Age: " + age);

age = 26; // Updating the age variable

console.log("Updated Age: " + age);

const PI = 3.14159;

// PI = 3.14; // This will throw an error because PI is a constant

console.log("Value of PI: " + PI);

// array

let arry = [1, 2, 3, "four", 5];

console.log("Array: " + arry);

// object

let user = {
    name: "Yin",
    id: 123,
    age: 12,
    gender: "female"
}

console.log("User Object: ", user);

// immutable

let str = "Hello";

str[0] = "Z"; // This will not change the string/primitives because strings/primitives are immutable

console.log(str[0]);

// mutable

let arr = [1, 2, 3];
arr.push(4); // This will change the array because arrays are mutable

console.log(arr);

let obj = { name: "John", age: 30 };

obj.name = "Doe"; // This will change the object because objects are mutable

console.log(obj);

// copy by value

let a = 10;
let b = a; // Copy by value

b = 20; // Changing b will not affect a

console.log("a: " + a);
console.log("b: " + b);

// copy by reference

let obj1 = { name: "Alice" };
let obj2 = obj1; // Copy by reference

obj2.name = "Bob"; // Changing obj2 will affect obj1

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);


