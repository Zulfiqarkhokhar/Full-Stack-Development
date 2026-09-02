// forEach, map, filter, reducer, set


// forEach it is used to iterate over any array to perform opertion like print, sum of array value etc;

let arr1 = [3,4,5,6,7];
let sum = 0;

// to iterate
arr1.forEach((num,index,arr1)=>{ // take callback function and perform operation
    console.log(num,index,arr1);
})

// to sum of all value
arr1.forEach((num)=>{
    sum = sum+num;
})

console.log("Total:",sum);


// filter it is used to apply condition on array to get specific value and it return new arr

let newArr = arr1.filter((n)=>n>=5);

console.log(newArr)

// map it is used to perform some operation to modify the data of array and return new array

let newArr2 = arr1.map((num)=>num*3);

console.log(newArr2)

// reduce it is used to iterate over array and accumulate the result into single unit and return it

let totalSum = arr1.reduce((accumulate,currentVal)=>{
    return accumulate+currentVal;
},0)

console.log("Total",totalSum);


// Set it is kind of array that only store the unique value and remove the duplicate by default

let arr2 = [10,30,10,20,30,40,50];

let mySet = new Set(arr2);

console.log(mySet);
console.log(typeof mySet);

// to make the value into same array type do this with spread

let mySet2 = [...new Set(arr2)];

console.log(mySet2)

for(let n of mySet){
    console.log(n);
}