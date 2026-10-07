function mostFrequent(arr){

    let map = new Map();

    for(let n of arr){
        if(map.has(n)){
            map.set(n,map.get(n)+1);
        }else{
            map.set(n,1);
        }
    }

    let value = 0;
    let frequency = 0;
    for(let key of map.keys()){
        if(map.get(key)>frequency){
            frequency = map.get(key);
            value = key;
        }
    }

    return value;

}

console.log(mostFrequent([1, 3, 2, 1, 4, 1]));
console.log(mostFrequent([2, 3, 2, 3, 4]));
console.log(mostFrequent([5, 5, 2, 2, 2]));
console.log(mostFrequent([7]));