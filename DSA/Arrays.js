console.log("Arrays")

let arr = [1,2,3,4,5];

let mixedArr = ["Ali",10,true,undefined,{name:"Bob"},["a","b"]];

console.log(arr);
console.log(mixedArr);

// custom array

class MyArr {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
}


const MyNewArr = new MyArr();

MyNewArr.push("Ali");

console.log(MyNewArr)
