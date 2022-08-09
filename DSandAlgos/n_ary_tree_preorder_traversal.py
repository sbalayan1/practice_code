# Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

# Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

# Example 1:

# Input: root = [1,null,3,2,4,null,5,6]
# Output: [1,3,5,6,2,4]

tree = {
    "val": 1,
    "children": [
        {
            "val": 3,
            "children":[
                {
                    "val": 5,
                    "children":[]
                },
                {
                    "val": 6,
                    "children":[]
                }
            ]
        },
        {
            "val": 2,
            "children":[]
        },
        {
            "val": 4,
            "children":[]
        }
    ]
}

def n_ary_pre_order_traverse_recursive(root):
    arr = []
    def recursive(root):
        if root:
            arr.append(root["val"])
            for i in root["children"]:
                recursive(i)

    recursive(root)
    return arr

print(n_ary_pre_order_traverse_recursive(tree))