class Node(object):
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class Solution: 
    def isValidBST(self, root):
        if root is None: return True

        def recursive(root, low, high):
            if root:
                if root.val <= low or root.val >= high: return False
                return recursive(root.left, low, root.val) and recursive(root.right, root.val, high)

            return True


        return recursive(root, -math.inf, math.inf)