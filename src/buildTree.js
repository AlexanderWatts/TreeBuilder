import node from './node';

const buildBalancedTree = (levels) => {
  const totalNodes = 2 ** (levels) - 1;
  const totalParentNode = 2 ** (levels - 1) - 1;
  const root = node();
  const buffer = [];
  const visited = [];

  buffer.push(root);

  while (visited.length < totalNodes) {
    const currentNode = buffer.shift();

    if (visited.length < totalParentNode) {
      const leftNode = node();
      const rightNode = node();

      currentNode.children.push(leftNode);
      currentNode.children.push(rightNode);

      buffer.push(leftNode);
      buffer.push(rightNode);
    }

    visited.push(currentNode);
  }

  return root;
};

export default buildBalancedTree;
