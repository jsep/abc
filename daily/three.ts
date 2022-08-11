/*
* Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'

* */

export type Node = {
  val: string;
  left: Node;
  right: Node;
};

// Serializes in array like structure
// [root-val, [left, right]]
// [root-val, [left, right]]
export function serialize(node: Node): string {
  if (node === null) {
    return 'null';
  }
  if (!node || (!node.left && !node.right)) {
    return '[]';
  }
  return `[]`;
}
export function deserialize(s: string): Node {
  return JSON.parse(s);
}
