//Link : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insPos = 1
    let count = 0
    let length = 0
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i-1]){
            if(count == 2){
                insPos = i
                count = 0
            }else{
                count = 2
                length += 2
            }
        }else{
            if(count == 2){
                insPos = i
                count=0
            }else{
                nums[insPos] = nums[i]
                insPos++
                count=2
                length += 2
            }
        }
    }
    return length;
};


// let nums = [1,1,1,2,2,3]
let nums = [0,0,1,1,1,1,2,3,3]
console.log("Before : ", nums)
console.log("Result : ", removeDuplicates(nums))
console.log("After : ", nums)
