// Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appear
//  only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input 
// array in-place with O(1) extra memory.


const num = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

const removeDuplicates = (nums = []) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};
console.log(removeDuplicates(num));
