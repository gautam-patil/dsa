// https://leetcode.com/problems/single-number/description/

const nums = [2,2,1]

function singleNumber(nums){

    let xor = 0

    for(let i=0; i<nums.length; i++){

        xor = xor ^ nums[i]
    }
    console.log( xor)
}

singleNumber(nums)



// How XOR Works Here
// XOR (^) follows two key rules:

// Any number XOR itself equals 0 (x ^ x = 0).
// ​

// Any number XOR 0 equals itself (x ^ 0 = x).
// ​

// Duplicates cancel completely, and order doesn't matter due to XOR's commutative property.
// ​

// Step-by-Step Walkthrough
// Input: [4,1,2,1,2] (unique: 4). Start with xor = 0:

// text
// xor = 0 ^ 4 = 4     (binary: 000 ^ 100 = 100)
// xor = 4 ^ 1 = 5     (100 ^ 001 = 101)  
// xor = 5 ^ 2 = 7     (101 ^ 010 = 111)
// xor = 7 ^ 1 = 6     (111 ^ 001 = 110)  
// xor = 6 ^ 2 = 4     (110 ^ 010 = 100) ← back to 4!

//Pairs (1^1=0, 2^2=0) vanish; 0 ^ 4 = 4