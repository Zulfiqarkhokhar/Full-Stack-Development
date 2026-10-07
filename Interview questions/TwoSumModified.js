function twoSum(arr,target){

    let map = new Map();
    let index = 0;
    for(let n of arr){
        map.set(n,target-n);
        index++;
    }
    console.log(map)
    

}

console.log(twoSum([2,4,1,6,7],7));