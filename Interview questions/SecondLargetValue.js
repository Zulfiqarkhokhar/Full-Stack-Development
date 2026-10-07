function secondLargestValue(arr){

    let large = Number.MIN_VALUE;
    let secondLarge = Number.MIN_VALUE;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            secondLarge = large;
            large = arr[i];
        }
        if(arr[i]<large && arr[i]>secondLarge){
            secondLarge = arr[i]
        }
    }
    return secondLarge;

}


console.log(secondLargestValue([2,5,1,7,3,9,4,20,13]));