#check if node is empty or null
#traverse left subtree by calling the inorder method
#display the data of the node 
#traverse the right subtree by calling the inorder method

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
            'val': 'H',
            'left': {},
            'right': {
                'val': 'I', 
                'left': {}, 
                'right': {}
            }
        }
    },
}


def inorder_traversal(root):
    def recursive(root):
        if root:
            recursive(root['left'])
            print(root['val'])
            recursive(root['right'])
    
    recursive(root)

inorder_traversal(tree) #ABCDEFGIH

