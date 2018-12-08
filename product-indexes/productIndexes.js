/*
Given an array of integers, return a new array such that each element at index i of 
the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

export function productIndexes(input) {
    let result = new Array(input.length).fill(0);
    let prod = 1;

    input.forEach(e => {
        prod = prod * e;
    });

    result = result.map((e, i) => prod / input[i]);

    return result;
}

export function productIndexesWithoutDivision(input) {
    let result = new Array(input.length).fill(1);
    let temp = 1;
    
    for(let i = 1; i < input.length; i++) {
        result[i] = result[i - 1] * input[i - 1];
    }

    for(let i = input.length - 2; i >= 0; i--) {
        temp = temp * input[i + 1];
        result[i] = result[i] * temp; 
    }

    return result;
}