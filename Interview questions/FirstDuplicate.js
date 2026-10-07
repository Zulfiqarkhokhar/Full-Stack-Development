function firstDuplicate(arr){

    let myMap = new Map();
    for(let i=0; i<arr.length;i++){
        if(myMap.has(arr[i])){
            return arr[i]
        }else{
            myMap.set(arr[i],1);
        }
    }
    return null;

}


console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))
console.log(firstDuplicate([1, 2, 3, 4]))
console.log(firstDuplicate([5, 1, 2, 5, 3]))