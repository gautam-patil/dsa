// https://leetcode.com/problems/missing-number/description/

const nums = [3,0,1]

function missingNumber(nums){
    const n = nums.length

    let sum =( n * (n+1))/2
    for(let i =0; i< n; i++){

        sum = sum - nums[i]
    }
    console.log( sum)
}

missingNumber(nums)