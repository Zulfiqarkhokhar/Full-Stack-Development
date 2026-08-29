// object
// key value pair

const user = {
    name: "Zulfiqar",
    age: 27,
    address: "Naudero, Larkana",
    amount: 34000
}

console.log(user);

// accessing individual element

console.log(user.name);
console.log(user.age);
console.log(user.address);
console.log(user.amount);

// other way of accessing like array

console.log(user["name"]);
console.log(user["amount"])

// inserting new values

user.gender = "male";

console.log(user);

// updating any value

user.amount = 10000;

console.log(user);

// deleting element

delete user.address;

console.log(user)


const user2 = user; // copy by reference only points to user

console.log(user2 == user)

// changing in user2 will change in user as well

user2.name = "Yasir";

console.log(user);
console.log(user2)

// getting keys and values of object only

console.log(Object.keys(user));
console.log(Object.values(user));

// for both

console.log(Object.entries(user));

// loop over object

for(let keys in user){
    console.log(`${keys} : ${user[keys]}`)
}

// destructuring object

const {name,age} = user;

const {name:userName,age:userAge} = user; // for changing the variable names

console.log(name,age)
console.log(userName,userAge)

// array destructuring

let nums = [20,30,40,50];

const [first,second] = nums;

const [one,...rest] = nums; // rest operator to collect rest of values in single variable

console.log(first,second)

console.log(one,rest)

// for of loop on object

for(let keys of Object.keys(user)){
    console.log(user[keys])
}

// function in object

const user3 = {
    name:"Ali",
    age:30,
    greetings: function(){
        console.log(`Hello everyone I am ${this.name}`); // always use this to refer current object reference
        return 10;
    }
}

let val = user3.greetings();

console.log(val)

// nested object

const user4 = {...user3,address:{city:"Nauder",Country:"Pakistan"}};
// with spread operator it create new object not copy the reference

console.log(user3)
console.log(user4)

// accessing nested object value

console.log(user4.address.Country)


//shallow copy mean nested object will be share change in user5 will change in user4 also
const user5 = {...user4};

user5.name = "Mohan"
user5.address.Country = "India";

console.log(user4);
console.log(user5)

// the name only changed for user5 but city change for both
// so make it complete seperate copy use
// deep copy

const tempUser = {
    name: "Mohan laal",
    address: {
        city:"Larkana",
        Country: "Pakistan"
    }
}

const user6 = structuredClone(tempUser);

user6.address.Country = "India";

console.log(tempUser);
console.log(user6);

// const user7 = structuredClone(user3); // can not clone the function because it can have other data dependencies as well
