// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

//This can be done recursively


let hasPathSum = (root, target) => {
    //what are my base cases?
        //when the root is none, return false
        //when the target - root.val == 0, return true

    if (!root) return false
    if (!root.left && !root.right) {
        //we should only make this check at a leaf node
        if (target - root.val == 0) return true 
    }

    return hasPathSum(root.left, target-root.val) || hasPathSum(root.right, target-root.val)
}