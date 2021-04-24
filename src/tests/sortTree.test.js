import sortBalancedTree from '../sortTree';

const array = [1, 2, 3];

const tree = sortBalancedTree(array, 0, array.length - 1);

test('check that sortBalancedTree returns object with sorted data', () => {
  expect(tree.data).toBe(2);
  expect(tree.children[0].data).toBe(1);
  expect(tree.children[1].data).toBe(3);
});
