//https://leetcode.com/problems/reverse-string/description/

const s = ["h","e","l","l","o"]

function reverseString(s){
    const n = s.length;
    for(i=0; i<n/2; i++){
        let temp = s[i]
        s[i] = s[(n-i)-1]
        s[(n-i)-1] = temp
    }
    console.log(s)
}

reverseString(s)