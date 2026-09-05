// // Promise

// const p1 = fetch("https://api.github.com/users");
// console.log(p1); // to accessing the data directly the promise will be pending because it is asynch task

// // we can consume it after FullFill or Reject

// const p2 = p1.then((response)=>{
//     console.log(response);
//     return response.json();
// }); // now this also return the result in byte code so for that we need to read body and convert the json to js object

// // to convert it is again asynch task

// p2.then((data)=>{
//     console.log(data); // as soon as the promise fullfilled the result will be shown
// })

// // better way to chain the promise

fetch("https://api.github.com/users").
then((response)=>{
    if(!response.ok){
        throw new Error("Data is not present");
        // this condition occurs when promise fullfilled but the data not present, url is missing or something else
            // then we need to handle this error by throwing error to catch
    }
    return response.json();
}).
then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err); // this is handle when we are not able to communicate server
    // are the promise is reject we say
})



// converting js Object to json formate

let user = {
    name:"Zulfiqar Ali",
    age: 28,
    city: "Naudero"
}

const jsonFormate = JSON.stringify(user);
console.log(jsonFormate);


// json to javascript object

let user2 = `{
    "name":"Ali",
    "age":30,
    "address":"Larkana"
}`;


const jsObject = JSON.parse(user2);

console.log(jsObject);


// creating promises


const p1 = new Promise((resolve,reject)=>{
    resolve("Resolved");// it can be any object or string message

    // reject("Rejected");
});

p1.then((response)=>{
    console.log(response);
}).catch((err)=>{
    console.log(err)
})