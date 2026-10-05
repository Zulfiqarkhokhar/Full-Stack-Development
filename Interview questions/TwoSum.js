function twoSum(arr,target){

    let indices =[];

    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                indices.push(i);
                indices.push(j);
                return indices;
            }
        }
    }

}

console.log(twoSum([2,4,1,6,7],7));