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