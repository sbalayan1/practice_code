#LEFT -> RIGHT -> ROOT

#check if node is null
#traverse left subtree recursively
#traverse right subtree recursively
#print the node val


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

def postorder_traversal(root):
    def recursive(root):
        if root:
            recursive(root.left)
            recursive(root.right)
            print(root.val)


class Node(object):
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BinaryTree(object):
    def __init__(self, root):
        self.root = Node(root)
    
    def preorder_traversal(self):
        def recursive(root):
            if root:
                print(root.val)
                recursive(root.left)
                recursive(root.right)

        return recursive(self.root)

    def inorder_traversal(self):
        def recursive(root):
            if root:
                recursive(root.left)
                print(root.val)
                recursive(root.right)
        
        return recursive(self.root)

    def postorder_traversal(self):
        def recursive(root):
            if root:
                recursive(root.left)
                recursive(root.right)
                print(root.val)

        return recursive(self.root)

    


#               1
#           /       \  
#          2          3  
#         /  \      /   \
#        4    5     6   7 

binary_tree = BinaryTree(1)
binary_tree.root.left = Node(2)
binary_tree.root.right = Node(3)
binary_tree.root.left.left = Node(4)
binary_tree.root.left.right = Node(5)
binary_tree.root.right.left = Node(6)
binary_tree.root.right.right = Node(7)


print(binary_tree.preorder_traversal())# 1-2-4-5-3-6-7
print(binary_tree.inorder_traversal())#4-2-5-1-6-3-7
print(binary_tree.postorder_traversal())#4-5-2-6-7-3-1

