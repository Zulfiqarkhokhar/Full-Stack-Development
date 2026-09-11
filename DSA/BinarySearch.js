const array = [12,34,45,67,80,95,99];

const binarySearch = (num) => {
    let start = 0;
    let end = array.length - 1;

while(start != end){

    let mid = parseInt((end+start)/2);
    if(array[mid] === num){
        return mid;
    }

    if(num>array[mid]){
        start = mid+1;
    }
    else{
        end = mid-1;
    }
}
return start;
}

console.log(binarySearch(80));