//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

const nums = [0,0,1,1,1,2,2,3,3,4];

function removeDuplicates(nums){

    let uniqueIndex = 0

    for(let i = 1; i< nums.length; i++){

        if(nums[uniqueIndex] != nums[i]){

            uniqueIndex++
            nums[uniqueIndex] = nums[i]
        }
    }
    console.log(++uniqueIndex)
    console.log(nums)
}

removeDuplicates(nums)