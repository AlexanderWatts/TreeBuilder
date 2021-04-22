import node from './node';

const buildBalancedTree = (levels) => {
  const totalNodes = 2 ** (levels) - 1;
  const totalParentNodes = 2 ** (levels - 1) - 1;

  const root = node();
  const buffer = [];
  const visited = [];
  const allTreeData = [];

  buffer.push(root);

  while (visited.length < totalNodes) {
    const currentNode = buffer.shift();
    allTreeData.push(currentNode.data);

    if (visited.length < totalParentNodes) {
      const leftNode = node();
      const rightNode = node();

      currentNode.children.push(leftNode);
      currentNode.children.push(rightNode);

      buffer.push(leftNode);
      buffer.push(rightNode);
    }

    visited.push(currentNode);
  }

  return ({
    root,
    totalNodes,
    totalParentNodes,
    allTreeData,
    allTreeDataSorted: allTreeData.sort((a, b) => a - b),
  });
};

export default buildBalancedTree;
