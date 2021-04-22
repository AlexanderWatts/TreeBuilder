import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TreeStats = ({ tree, sorted }) => {
  const {
    totalNodes,
    totalParentNodes,
  } = tree;

  return (
    <div className="stats">
      <h3>Tree stats</h3>
      <ul>
        <li>
          Total parent nodes:
          <span>{totalParentNodes}</span>
        </li>
        <li>
          Total nodes:
          <span>{totalNodes}</span>
        </li>
        <li>
          Tree sorted?
          <span>{`${sorted}`}</span>
        </li>
      </ul>
    </div>
  );
};

TreeStats.propTypes = {
  tree: PropTypes.objectOf(PropTypes.any).isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default TreeStats;
