let numbers = [1,2,3,4,5];

let mixArr = [1,2,true,"Ali"];

// spread operator break each element of array into individual element 

let combineBothBySpread = [...numbers,...mixArr];

console.log(combineBothBySpread)


// splice

console.log(numbers.splice(1,3,"Ali","Abbass"))// this will return value to remove from between or index defined in between that
// and actual array modified with new value

console.log(numbers)

// slice take value but do not change but splice does

let names = ["Alice","bob"];

console.log(names.toString());
console.log(typeof names)
console.log(names)

// sorting in array

let fruits = ["Banana","Orage","Apple","Grapes"];

console.log("return sorted array : ",fruits.sort())

fruits.sort(); // return and make actual change
console.log(fruits)

let values = [12,34,11,6,32,3,25]; // sorting is done by character bases not number

// values.sort()

// console.log(values)

// if number to sort then

values.sort((a,b)=>a-b);

console.log(values)

// flaten the array

let values2 = [1,2,3,[4,5,6,[7,8,9],10],11];
console.log(values2)

console.log(values2.flat(Infinity)); // flat return new array in same level but by default it go to 1 level 