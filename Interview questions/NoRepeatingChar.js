function firstNonRepeatingChar(str){

    let myMap = new Map();

    for(let char of str){
        if(myMap.has(char)){
            myMap.set(char,myMap.get(char)+1);
        }
        else{
            myMap.set(char,1);
        }
    }

    for(char of str){
        if(myMap.get(char) === 1){
            return char;
        }
    }

}

console.log(firstNonRepeatingChar("swiss"))