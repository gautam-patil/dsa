// arr = [4, 2, 7, 1, 9]

function largestNumberInArray(arr) {

    let largest = arr[0];
    
    for(let i=1; i<arr.length; i++){
        if(arr[i]> largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestNumberInArray([4, 2, 71, 1, 9])); // 9