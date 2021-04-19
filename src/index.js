import { TreeGraph } from '@antv/g6';
import buildBalancedTree from './buildTree';
import './styles.css';

const heightOfTreeInput = document.getElementById('heightOfTreeInput');
const createNewTreeButton = document.getElementById('createNewTreeButton');

let defaultLevels = heightOfTreeInput.value;

const tree = new TreeGraph({
  container: 'root',
  fitView: true,
  width: document.body.clientWidth,
  height: document.body.clientHeight,
  layout: {
    type: 'dendrogram',
    direction: 'TB',
    nodeSep: 100,
    rankSep: 100,
  },
});

const renderTree = (data) => {
  tree.data(data);
  tree.render();
};

heightOfTreeInput.addEventListener('input', (event) => {
  defaultLevels = event.target.value;
});

createNewTreeButton.addEventListener('click', () => {
  const { root } = buildBalancedTree(defaultLevels);
  renderTree(root);
});

const { root } = buildBalancedTree(defaultLevels);

renderTree(root);
