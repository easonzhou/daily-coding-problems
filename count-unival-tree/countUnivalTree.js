/*

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

 */

export default function countUnivalTree(root) {
    const {count, isUnival} = helper(root);
    return count;
}

function helper(root) {
    if(!root) {
        return {count: 0, isUnival: true};
    }

    let leftTree = helper(root.left);
    let rightTree = helper(root.right);

    let totalCount = leftTree.count + rightTree.count;
    if(leftTree.isUnival && rightTree.isUnival) {
        if(root.left && root.left.val !== root.val) {
            return {count: totalCount, isUnival: false};
        }
        if(root.right && root.right.val !== root.val) {
            return {count: totalCount, isUnival: false};
        }
        return {count: totalCount + 1, isUnival: true};
    }
    return {count: totalCount, isUnival: false};
}