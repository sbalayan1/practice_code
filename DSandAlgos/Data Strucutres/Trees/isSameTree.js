// Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

//my solution
let isSameTree = function(p, q) {
    if (!p && !q) return true
    let queue = [[p, q]]
    while (queue.length > 0) {
        let [currP, currQ] = queue.shift()
        
        if ((!currP && currQ) || (currP && !currQ)) return false
        if (currP == undefined && currQ == undefined) continue
        if (currP.val != currQ.val) {
            return false
        }
        
        let leftNodes = [], rightNodes = []
        if (currP.left) leftNodes.push(currP.left)
        if (currP.right) rightNodes.push(currP.right)
        if (currQ.left) leftNodes.push(currQ.left)
        if (currQ.right) rightNodes.push(currQ.right)
            
        if (leftNodes.length > 0 || rightNodes.length > 0) queue.push(leftNodes, rightNodes)
    }
    
    return true
};


//recursive solution
let isSameTree = function(p, q) {
    if (!p && !q) return true   //base case is if p and q are null
    if (!p || !q) return false //if either is not null whilst the other is
    if (p.val != q.val) return false
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

//iterative solution using stack
let isSameTree = function(p, q) {
    let stack = [[p,q]]
}

