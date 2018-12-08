/*
Given an array of integers, find the first missing positive integer in linear time and constant space. 

In other words, find the lowest positive integer that does not exist in the array. 

The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

export default function findMissingPositive(nums) {
    let shift = 0, temp;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= 0) {
            temp = nums[shift];
            nums[shift] = nums[i];
            nums[i] = temp;
            shift++;
        }
    }

    for(let i = shift; i < nums.length; i++) {
        if((Math.abs(nums[i]) - 1 >= 0) && (shift + Math.abs(nums[i]) - 1 < nums.length)) {
            nums[Math.abs(nums[i]) - 1 + shift] = -1 * nums[Math.abs(nums[i]) - 1 + shift];
        }
    }

    for(let i = shift; i < nums.length; i++) {
        if(nums[i] > 0) {
            return i + 1 - shift;
        }
    }

    return nums.length - shift + 1;
}