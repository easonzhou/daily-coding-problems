/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

export default function twoItemsSum(nums, target) {
    var map = {};

    for(var i = 0; i < nums.length; i++) {
        var res = target - nums[i];
        if(map[res]) {
            return true;
        }

        map[nums[i]] = true;
    }

    return false;
}