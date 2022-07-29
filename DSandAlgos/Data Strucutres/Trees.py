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
print(root.val) # 'a'
root.insert_left(Node('b'))
print(root.left.val) #'b'
root.insert_left(Node('c'))
root.insert_right(Node('d'))
print(root.left.val, root.right.val) #'c', 'd'


#Representing a tree as a list of lists.
    # each element should have only one parent element up to the outermost list
    # node is represented by a list 
        #the first element is its value
        #the second element is its left subtree
        #the third element is its right subtree 

        #for instance to represent a tree with a root of A and left/right children B,C we can create the list below

tree = ['a', ['b', [], []], ['c', [], []]]

#to access values in the tree, we can use the index
#note that subtrees b and c are leaf nodes because they have NO CHILDREN!

tree[0] #gets the root
tree[1] #gets the left subtree
tree[2] #gets the right subtree
tree[1][0] #'b'
tree[2][0] #'c'

#note that the val argument to be passed is just a number, so we need to construct the list in our function
def insert_left_subtree(tree, val):
    if tree[1] is None: #checks that there is no subtree in the left position
        tree[1] = [val, [],[]]
    else:
        #if there is a subtree in left
        temp = tree[1] #save left to variable. note that tree[1] will be a list
        tree[1] =  [val, temp, []]


def insert_right_subtree(tree, val):
    if tree[2] is None:
        tree[2] = [val, [], []]
    else:
        temp = tree[2]
        tree[2] = [val, [], temp]

insert_left_subtree(tree, 10)
insert_right_subtree(tree, "hello world")
print(tree) #['a', [10, ['b', [], []], []], ['c', [], []]]
print(tree[1]) #[10, ['b', [], []], []]
print(tree[2]) #["hello world", [], ["c", [], []]]







