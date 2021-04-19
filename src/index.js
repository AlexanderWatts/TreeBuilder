import { TreeGraph } from '@antv/g6';

const data = {
  id: 'one',
  label: 'Root',
  children: [
    {
      id: 'left',
      label: 'Left child',
    },
    {
      id: 'right',
      label: 'Right child',
    },
  ],
};

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

tree.data(data);
tree.render();
