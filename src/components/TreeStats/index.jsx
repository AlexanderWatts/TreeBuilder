import React, { useContext } from 'react';
import { CurrentTreeContext } from '../../contexts/CurrentTreeContext';
import './styles.css';

const TreeStats = () => {
  const { treeStats } = useContext(CurrentTreeContext);

  const {
    totalNodes,
    totalParentNodes,
  } = treeStats;

  return (
    <div className="stats">
      <h1>Tree Stats</h1>
      <div>
        Total Tree Nodes:
        {totalNodes}
      </div>
      <div>
        Total Parent Nodes:
        {totalParentNodes}
      </div>
    </div>
  );
};

export default TreeStats;
