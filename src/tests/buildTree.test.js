import buildBalancedTree from '../buildTree';

const tree = buildBalancedTree(2);

test('check tree returns an object', () => {
  expect(typeof tree).toBe('object');
});

test('check tree returns an object', () => {
  expect(typeof tree).toBe('object');
});

test('check tree object contains correct keys', () => {
  expect(Object.keys(tree).sort()).toEqual(['root', 'totalNodes', 'totalParentNodes', 'allTreeData', 'allTreeDataSorted'].sort());
});

test('check tree has expected amount of nodes', () => {
  expect(tree.totalNodes).toBe(3);
});

test('check tree has expected amount of parent nodes', () => {
  expect(tree.totalParentNodes).toBe(1);
});
