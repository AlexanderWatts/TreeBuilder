import node from '../node';

const root = node();

test('check if node returns an object', () => {
  expect(typeof root).toBe('object');
});

root.data = 5;
root.label = '5';
root.children = [];

test('check if node contains the correct data', () => {
  expect(root.data).toBe(5);
});

test('check if node label contains correct data', () => {
  expect(root.label).toMatch(/5/);
});

test('check if node children is empty array', () => {
  expect(Array.isArray(root.children)).toBe(true);
});
