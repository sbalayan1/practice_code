// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

//recursive solution
let minDepth = (root) => {
    if (!root) return 0
    if (!root.left && !root.right) return 1

    let min = Infinity
    if (root.left) min = Math.min(min, minDepth(root.left))
    if (root.right) min = Math.min(min, minDepth(root.right))
    return min + 1
}