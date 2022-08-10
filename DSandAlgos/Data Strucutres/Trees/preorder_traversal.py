#ROOT -> LEFT -> RIGHT

#1.check if the node is empty
#2.print the contents of the node
#3.traverse left subtree by recursively calling the preorder method
#4.traverse right subtree by recursively calling the preorder method

# F, B, A, 
tree = {
    'val': 'F',
    'left': {
        'val': 'B',
        'left': {
            'val': 'A',
            'left': {},
            'right': {}
        },
        'right': {
            'val': 'D',
            'left': {
                'val': 'C',
                'left': {},
                'right': {}
            },
            'right':{
                'val': 'E',
                'left': {},
                'right': {}
            }
        }
    },
    'right': {
        'val': 'G',
        'left': {},
        'right': {
            'val': 'I',
            'left': {},
            'right': {
                'val': 'H', 
                'left': {}, 
                'right': {}
            }
        }
    },
}

def preorder_dfs(root):
    if root:
        print(root['val'])
        preorder_dfs(root['left'])
        preorder_dfs(root['right'])
        # traversal += (str(root['val']) + "-")
        # traversal = preorder_dfs(root['left'], traversal)
        # traversal = preorder_dfs(root['right'], traversal)
    
    # return root

preorder_dfs(tree) # F B A D C E G I H

# def preorder_dfs(start, traversal):
#     if start:
#         traversal += (str(start['val']) + "-")
#         if len(start) > 0:
#             traversal = preorder_dfs( start['left'], traversal)
#         if len(start) > 1:
#             traversal = preorder_dfs( start['right'], traversal)
#     return traversal

# preorder_dfs(tree, "")