    #Root - is the root node of a tree
    #Node - point within a tree
    #Edge - connects two nodes to show that there is a relationship
    #Path - ordered list of nodes that are connected by edges

    #Parent -
    #Children - all nodes that have incoming from the same parent node. 
    #Sibling - nodes that belong to the same parent

    #Subtree - set of nodes and edges comprised of a parent and children.

    #Leaf Node - is a node with no children.

    #Level - is the number of edges from root to node n. 

    #Height - max level of any node in the trees


#Properties of a tree:
    #one node designated as the root
    #every node except the root is connected by an edge from a parent node. 
    #a unique path traverses from root to each index
    #if each node in the tree has a max of two children. 

#representing a tree using Nodes and references between instances

class Node(object):
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


# the current node has no existing left child
    #add if there is no left child
# the current node has a left child
    #move the left child down one level in the tree. in this case it will now be the left child of the node we are inserting

#note that val is not just a value but is a Node
    def insert_left(self, val):
        if self.left is None:
            self.left = val
        else:
            val.left = self.left
            self.left = val

    def insert_right(self, val):
        if self.right is None:
            self.right = val
        else:
            val.right = self.right
            self.right = val

root = Node('a')
print(root.val)

root.insert_left(Node('b'))
print(root.left.val)

root.insert_left(Node('c'))
root.insert_right(Node('d'))

print(root.left.val, root.right.val)

