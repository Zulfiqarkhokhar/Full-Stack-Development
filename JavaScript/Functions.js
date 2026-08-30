// functions

function greetings(){
    console.log("Hello JS Developer");
}

function addNums(num1,num2){
    return num1+num2;
}

// calling function 

greetings(); // this return undefined only console log
let result = addNums(12,13); // this function return the value

console.log(result)

console.log(greetings); // this greeting without brackets store reference of function


function addNumbers(num1,num2,num3=0,num4=0){ // num3 and num4 will get default value zero if not passed by function call
    return num1+num2+num3+num4;
}

console.log(addNumbers(1,2));
console.log(addNumbers(1,2,3));
console.log(addNumbers(1,2,3,4));

// to avoid this parameter confusion we have rest operator to collect data in single unit like array

function addNumbers2(...nums){

    let sum = 0;

    for(let n of nums){
        sum +=n;
    }

    return sum;
}
console.log("From rest operator")
console.log(addNumbers2(1,2));
console.log(addNumbers2(1,2,3));
console.log(addNumbers2(1,2,3,4));
console.log(addNumbers2(1,2,3,4,34,23,121,4,4,54,5));


// other method to write method

// assign method to variable

//sayHello(); // but this method cannot do hoisting
// mean calling before declairing
// but other can do it

const sayHello = function(){
    console.log("Hello Developers");
}

sayHello();


// suppose
// hoisting
sayGoodBye();

function sayGoodBye(){
    console.log("Good Bye Developers")
}

// arrow functions

const multiplyNumbers = (a,b) =>{
    return a*b;
}

console.log(multiplyNumbers(3,3))

// more simple syntax

const multiply = (a,b) => a*b;

console.log(multiply(4,4));


// ye more simple

const sayName = n => n;

console.log(sayName("Zulfiqar Ali"))

// to return object we use ()

const user = () =>({name:"Ali",age:30});

console.log(user());

// imediate invoked function

(function imediate(){
    console.log("I am IIF");
})();

// callback functions

function hi(callback){
    console.log("Hi")
    callback();
}

function hello(){
    console.log("Hello")
};

hi(hello);

