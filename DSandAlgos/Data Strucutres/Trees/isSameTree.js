// Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


// Things to think about?
    // What type of search should I use? BFS or DFS?
    // What are my base cases if I use recursion?
        //if p is null and q is not null, what should we return?
        //if both p and q are null, what should we return?
        //if p.val != q.val what should we return?


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
    while(stack.length > 0) {
        let [nodeP, nodeQ] = stack.pop()

        if ((nodeP && nodeQ) && (nodeP.val == nodeQ.val)) {
            stack.push([nodeP.left, nodeQ.left], [nodeP.right, nodeQ.right])
        } else if (nodeP || nodeQ) {
            return false
        }
    }
    return true
}

