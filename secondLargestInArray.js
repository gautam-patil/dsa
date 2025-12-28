
function SecondlargestNumberInArray(arr) {

    let largest = -Infinity;
    let second = -Infinity
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]> largest){
            second = largest
            largest = arr[i]
        }else if(arr[i] > second){
            second = arr[i]
        }
    }
    return second
}

console.log(SecondlargestNumberInArray([4, 2, 7, 1, 9, 10, 11])); // 9