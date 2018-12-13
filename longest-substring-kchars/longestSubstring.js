/*

This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

*/

export default function longestSubstring(string, k) {
    let pointer = -1, start = 0, dict = {}, maxLength = 0;

    while(++pointer < string.length) {
        if(!dict[string[pointer]]) {
            dict[string[pointer]] = 1;
        } else {
            dict[string[pointer]]++;
        }
        while (start <= pointer && !checkDictionary(dict, k)) { 
            dict[string[start++]]--;
        }

        if(pointer - start + 1 > maxLength) {
            maxLength = pointer - start + 1;
        }
    }
    return maxLength;
}

function checkDictionary(dict, k) {
    let distinctChars = 0;
    for(let key in dict) {
        if(dict[key] > 0) {
            distinctChars++;
        }
    }
    if(distinctChars <= k) { 
        return true;
    } 
    return false;
}