"use strict";
/*
This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/
exports.__esModule = true;
function constructWordsFromString(sentence, words) {
    var dictionary = {}, result = [];
    words.forEach(function (word) {
        if (!dictionary[word]) {
            dictionary[word] = true;
        }
    });
    var valid = isValid(sentence, dictionary, result);
    return valid ? result : null;
}
exports["default"] = constructWordsFromString;
function inDictionary(dictionary, word) {
    if (dictionary[word]) {
        return true;
    }
    return false;
}
function isValid(sentence, dictionary, result) {
    if (sentence.length <= 0) {
        return true;
    }
    for (var i = 1; i <= sentence.length; i++) {
        var word = sentence.slice(0, i);
        if (inDictionary(dictionary, word) && isValid(sentence.slice(i, sentence.length), dictionary, result)) {
            result.push(word);
            return true;
        }
    }
    return false;
}
