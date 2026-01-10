// https://leetcode.com/problems/move-zeroes/description/

const nums = [0,1,0,3,12]

function moveZeros(nums){

    let x = 0

    for(i=0; i< nums.length; i++){

        if(nums[i] != 0){
            nums[x] = nums[i]
            x++
        }
    }

    for(let i=x; i<nums.length; i++){
        nums[i] = 0
    }

    console.log(nums)
}

moveZeros(nums)