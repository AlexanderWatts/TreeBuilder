import { useContext, useEffect } from 'react';
import { TreeGraph } from '@antv/g6';
import buildBalancedTree from '../../buildTree';
import { TreeHeightContext } from '../../contexts/TreeHeightContext';
import { CurrentTreeContext } from '../../contexts/CurrentTreeContext';

const Tree = () => {
  const rendered = document.getElementById('rendered');

  const { setTreeStats } = useContext(CurrentTreeContext);

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

    const {
      root,
      totalNodes,
      totalParentNodes,
      allTreeData,
      allTreeDataSorted,
    } = buildBalancedTree(treeHeight);

    setTreeStats({
      root,
      totalNodes,
      totalParentNodes,
      allTreeData,
      allTreeDataSorted,
    });

    tree.data(root);
    tree.render();
  }, [treeHeight]);

  return null;
};

export default Tree;
