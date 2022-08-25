class Solution:
    def levelOrder_recursive(self, root):
        if root is None: return []
        output = []
        
        def recursive(root, level):
            if root:
                if len(output) == level: output.append([])
                output[level].append(root.val)
                recursive(root.left, level + 1)
                recursive(root.right, level + 1)
                
        recursive(root, 0)
        return output

    def levelOrder(self, root):
        if root is None: return []
        output = []
        queue = [root]
        
        while queue:
            level = []
            level_size = len(queue)
            
            for i in range(0, level_size):
                node = queue.pop(0)
                if node:
                    level.append(node.val)
                    if node.left: queue.append(node.left)
                    if node.right: queue.append(node.right)
                
            output.append(level)  
        return output



