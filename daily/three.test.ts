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
      const tree = node('root');
      // [root, []
      expect(serialize(tree)).toEqual('[root, null, null]');
    });
    it('tree with only left', () => {
      const tree = node('root', node('left'));
      //
      expect(serialize(tree)).toEqual('[root, [left, null, null], null]');
    });
    it('tree with only right', () => {
      const tree = node('root', null, node('right'));
      //
      expect(serialize(tree)).toEqual('[root, null, [right, null, null]]');
    });
    it('nested tree', () => {
      const tree = node('root', node('left'), node('right'));
      //
      expect(serialize(tree)).toEqual(
        '[root, [left, null, null], [right, null, null]]'
      );
      expect(serialize(tree)).toEqual(
        '[root, [left, [left.left, null, null], [left.right, null, null]], [right, null, null]]'
      );
    });
  });
});

function node(val: string, left: Node = null, right: Node = null): Node {
  return {
    val,
    left,
    right,
  };
}
