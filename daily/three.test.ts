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

import { serialize, Node } from './three';

describe('Daily problem #3 serialize/serialize binary tree', () => {
  describe('Serializes tree', () => {
    it('returns null on null node', () => {
      expect(serialize(null)).toEqual('null');
    });
    it('tree without leafs', () => {
      const tree: Node = {
        val: '1',
        left: null,
        right: null,
      };
      // [1, []
      expect(serialize(tree)).toEqual('[1, null, null]');
    });
  });
});
