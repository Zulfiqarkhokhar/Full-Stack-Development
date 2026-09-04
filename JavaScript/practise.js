console.log("Hello");

setTimeout(()=>{
    console.log("bro");
},10);

let result = 0;

for(let i=0; i<=1000000000; i++){
    result +=i;
}

console.log(result);