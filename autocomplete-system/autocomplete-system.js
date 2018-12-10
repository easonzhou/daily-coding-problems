/*
This problem was asked by Twitter.

Implement an autocomplete system. 

That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

function trieNode(char, word, children = {}) {
    this.char = char;
    this.word = word;
    if(!children) {
        this.children = {};
    } else {
        this.children = children;
    }
}

trieNode.prototype.contains = function(char) {
    return this.children.hasOwnProperty(char);
}

trieNode.prototype.addChild = function(child) {
    this.children[child.char] = child;
}

function trie(dict) {
    this.root = new trieNode("", "");
    
    for(let word of dict) {
        let node = this.root;
        let str = "";
        for(let char of word) {
            str += char;
            if(node.contains(char)) {
                node = node.children[char];
            } else {
                let n = new trieNode(char, str);
                node.addChild(n);
                node = n;
            }
        }
    }
}

trie.prototype.find = function(query) {
    let node = this.root;
    let result = [];
    let stack = [];

    for(let char of query) {
        if(!node.contains(char)) {
            return [];
        }
        node = node.children[char];
    }

    stack.push(node);
    while(stack.length) {
        let n = stack.pop();
        if(Object.keys(n.children).length) {
            for(let key in n.children) {
                if(n.children.hasOwnProperty(key)) {
                    stack.push(n.children[key]);
                }
            }
        } else {
            
            result.push(n.word);
        }
    }

    return result;
}

export default function autocomplete(dict, query) {
    let tree = new trie(dict);
    return tree.find(query);
}