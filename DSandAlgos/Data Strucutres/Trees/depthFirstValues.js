// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// remember depth first traversal uses a STACK

//check if stack is empty
//if not empty
    //pop from stack and label as currentNode
    //add the currentNodes val to your visited values
    //look at currentNode's children
    //add currentNode's children to your stack
        //add your right child then your left child so that your left child is at the top of your stack
        //make sure to check your children nodes exist
// Example 1

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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



function depthFirstValuesIterative(root) {
    if (!root) return []
    let result = []
    let stack = [root]
    while (stack.length > 0) {
        let currentNode = stack.pop()
        result.push(currentNode.val)

        if (currentNode.right) stack.push(currentNode.right)
        if (currentNode.left) stack.push(currentNode.left)
    }

    return result
}

console.log(depthFirstValuesIterative(a)) // => a,b,d,e,c,f
// n = # of nodes in your tree
// Time: O(n) => visit every single node in our tree
// Space: O(n) => the most we can add to our stack is N nodes

function depthFirstValuesRecursive(root) {
    if (!root) return [] //what is our base case
    let leftValues = depthFirstValuesRecursive(root.left) //what will this return? This should give you an array of all the values in the left subtree 
        //this means [b,d,e]
    let rightValues = depthFirstValuesRecursive(root.right) 
        //this means [c,f]

    return [root.val, ...leftValues, ...rightValues]
}

console.log(depthFirstValuesRecursive(a)) // => a,b,d,e,c,f