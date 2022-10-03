// Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

//note breadth first is different from level order because in level order, you need to separate each level into an array. 

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

function breadthFirstValuesItr(root) {
    if (!root) return []
    let queue = [root], result = []
    while (queue.length > 0) {
        let currNode = queue.shift()
        result.push(currNode.val)

        if (currNode.left) queue.push(currNode.left)
        if (currNode.right) queue.push(currNode.right)
    }

    return result
}

console.log(breadthFirstValuesItr(a)); //    -> ['a', 'b', 'c', 'd', 'e', 'f']
n = # of nodes
time: O(n) each node is visited once. Note this assumes that adding and removing from the queue runs in constant time
space: O(n) at most we will add at most n nodes into the stack.

