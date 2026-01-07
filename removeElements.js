//https://leetcode.com/problems/remove-element/description/

const nums = [0,1,2,2,3,0,4,2]
const val = 2

function removeElements(nums, val){

    let count = 0

    for(let i=0; i< nums.length; i++){

        if(nums[i] != val){

            nums[count] = nums[i]
            count++
        }

    }

    console.log( count);
    console.log(nums)
}

removeElements(nums, val)