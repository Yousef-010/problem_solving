// Given an integer array nums sorted in non-decreasing order
//remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// input : sorted array with duplicates values
// output : k element that caounte the unique elements 

function removeDuplicates(nums){
    let left = 1
    for (let i = 1 ;i<=nums.length-1 ; i++){
        
        if(nums[i] != nums[i -1]){
            nums[left] = nums[i]
            left +=1
        }      
    }     
    return left
}



console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5