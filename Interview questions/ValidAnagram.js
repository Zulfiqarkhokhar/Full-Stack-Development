function validAnagram(str1,str2){

    if(str1.length !== str2.length){
    return false;
    }

    let myMap1 = new Map();
    let myMap2 = new Map();

    for(let char of str1){
        if(myMap1.has(char)){
            myMap1.set(char,myMap1.get(char)+1);
        }
        else{
            myMap1.set(char,1);
        }
    }

    for(let char of str2){
        if(myMap2.has(char)){
            myMap2.set(char,myMap2.get(char)+1);
        }
        else{
            myMap2.set(char,1);
        }
    }

    for(let key of myMap1.keys()){
        if(myMap1.get(key) !== myMap2.get(key)){
            return false;
        }
    }

    return true;
}


console.log(validAnagram("a", "ab"));