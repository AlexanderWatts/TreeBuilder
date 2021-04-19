import { TreeGraph } from '@antv/g6';
import buildBalancedTree from './buildTree';
import './styles.css';

const root = buildBalancedTree(3);

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

tree.data(root);
tree.render();
