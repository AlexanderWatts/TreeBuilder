import { useContext, useEffect } from 'react';
import { TreeGraph } from '@antv/g6';
import buildBalancedTree from '../../buildTree';
import { TreeHeightContext } from '../../contexts/TreeHeightContext';

const Tree = () => {
  const rendered = document.getElementById('rendered');

  const { treeHeight } = useContext(TreeHeightContext);

  useEffect(() => {
    rendered.innerHTML = '';

    const tree = new TreeGraph({
      container: rendered,
      fitView: true,
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      modes: {
        default: [
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      layout: {
        type: 'dendrogram',
        direction: 'TB',
        nodeSep: 100,
        rankSep: 100,
      },
    });

    const { root } = buildBalancedTree(treeHeight);
    tree.data(root);
    tree.render();
  }, [treeHeight]);

  return null;
};

export default Tree;
