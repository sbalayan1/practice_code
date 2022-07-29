#1.check if the node is empty
#2.print the contents of the node
#3.traverse left subtree by recursively calling the preorder method
#4.traverse right subtree by recursively calling the preorder method

# F, B, A, 
tree = {
    'val': 'F',
    'left': {
        'val': 'B',
        # 'left': {
        #     'val': 'A'
        # },
        # 'right': {
        #     'val': 'D',
        #     'left': {'val': 'C'},
        #     'right':{'val': 'E'}
        # }
    },
    'right': {
        'val': 'G',
        # 'right': {
        #     'val': 'I',
        #     'right': {'val': 'H'}
        # }
    },
}

# def preorder_dfs(root):
#     if root is None: return
#     if root:
#         print(root['val'])
#         root = preorder_dfs(root['left'])
#         root = preorder_dfs(root['right'])
    
#     return root

def preorder_dfs(start, traversal):
# """Root->Left->Right"""
    if start:
        traversal += (str(start['val']) + "-")
        if len(start) > 0:
            traversal = preorder_dfs( start['left'], traversal)
        if len(start) > 1:
            traversal = preorder_dfs( start['right'], traversal)
    return traversal

preorder_dfs(tree, "")