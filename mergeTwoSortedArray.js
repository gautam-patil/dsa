let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

function mergeArray(nums1, m, nums2, n){

    let p1 = m - 1
    let p2 = n - 1

    for(i = m+n-1; i>=0; i--){
        if(p2<0){
            break;
        }
        
        if(p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1]
            p1--
        }else{
            nums1[i] = nums2[p2]
            p2--
        }
    }
    console.log(nums1)
}

mergeArray(nums1, m, nums2, n)