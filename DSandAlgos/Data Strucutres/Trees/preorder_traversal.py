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


def preorder_travesal_iterative(root):
    arr, stack = [], []

    while stack:
        if root:
            arr.append(root.val)
            if root.right: stack.append(root.right)
            if root.left: stack.append(root.left)
            
    return arr


def preorder_traversal_recursive(root):
    if root:
        print(root['val'])
        preorder_traversal_recursive(root['left'])
        preorder_traversal_recursive(root['right'])

preorder_traversal_recursive(tree) # F B A D C E G I H

