//https://leetcode.com/problems/max-consecutive-ones/description/

const nums = [1,1,0,1,1,1]


function maxConsecutiveOne(nums){

    let currCount = 0
    let maxCount = 0
    for(let i=0; i< nums.length; i++){

        if(nums[i] == 1){
            currCount++
        }else{
            currCount = 0
        }
        if(maxCount < currCount){
            maxCount = currCount
        }
    }

    console.log( maxCount);
}

maxConsecutiveOne(nums)