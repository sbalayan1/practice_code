// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.


// example 1
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

function treeIncludes(root, target) {
    if (!root) return false
    let queue = [root]
    while (queue.length > 0) {
        let curr = queue.shift()
        if (curr.val == target) return true

        if (curr.left) queue.push(curr.left)
        if (curr.right) queue.push(curr.right)
    }
    return false
}

console.log(treeIncludes(a, "e")); // -> true
n = # of nodes
time: O(n)
space: O(n)

function treeIncludesRecursive(root, target) {
    if (!root) return false //what is my base case ? I don't find a node, if there's no node, return false
    if (root.val == target) return true //if I find a node whose value == the target return true
    return treeIncludesRecursive(root.left, target) || treeIncludesRecursive(root.right, target)
}