import node from './node';

const sortBalancedTree = (array, start, end) => {
  const mid = Math.ceil((start + end) / 2);
  const root = node();
  root.data = array[mid];
  root.label = `${array[mid]}`;

  // Conditional prevents creating extra empty nodes
  if (end > start) {
    root.children.push(sortBalancedTree(array, start, mid - 1));
    root.children.push(sortBalancedTree(array, mid + 1, end));
  }
  return root;
};

export default sortBalancedTree;
