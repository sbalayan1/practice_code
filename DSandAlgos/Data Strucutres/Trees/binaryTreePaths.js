// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children


let binaryTreePaths = (root) => {
    let paths = []
    let buildPaths = (root, path='') => {
        //in the case where there is no root, we don't want to return or do anything. So we should check to make sure there is a root

        if (root) {
            path += root.val //append the current root's value to the path
            if (!root.left && !root.right) {//base case is where we reach a leaf node
                paths.push(path) //append the current path to the paths array
                    //do I need to reset path? 
                        //no. we're done with this path. This path will not be used in any of the other recursive calls. 
            } else {
                path += '->'
                if (root.left) buildPaths(root.left, path)
                if (root.right) buildPaths(root.right, path)
            }

        }
    }
    buildPaths(root)
    return paths
}



console.log(binaryTreePaths(tree)) //=> ["1->2->4", "1->3->5", "1->3->6"]

//note the above works. I'm guessing leetcode converts their tree inputs into actual trees 