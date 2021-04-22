import React, { useEffect, useState } from 'react';
import buildBalancedTree from '../../buildTree';
import sortBalancedTree from '../../sortTree';
import Sidebar from '../Sidebar';
import TreeSortController from '../TreeSortController';
import TreeHeightController from '../TreeHeightController';
import TreeStats from '../TreeStats';
import TreeRenderer from '../TreeRenderer';

const TreeState = () => {
  const [height, setHeight] = useState(3);
  const [tree, setTree] = useState(buildBalancedTree(height));
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    setTree(buildBalancedTree(height));
  }, [height]);

  const { root, allTreeDataSorted } = tree;
  const sortedTree = sortBalancedTree(allTreeDataSorted, 0, allTreeDataSorted.length - 1);

  return (
    <>
      <Sidebar>
        <TreeHeightController height={height} setHeight={setHeight} />
        <TreeSortController sorted={sorted} setSorted={setSorted} />
        <TreeStats tree={tree} sorted={sorted} />
      </Sidebar>
      <TreeRenderer
        height={height}
        tree={tree}
        setTree={setTree}
        unsortedTree={root}
        sortedTree={sortedTree}
        sorted={sorted}
      />
    </>
  );
};

export default TreeState;
