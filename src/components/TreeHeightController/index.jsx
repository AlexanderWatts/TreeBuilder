import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TreeHeightController = ({ height, setHeight }) => {
  const updateTreeHeight = (event) => {
    const treeHeight = parseInt(event.target.value, 10);
    if (treeHeight >= 1 && treeHeight <= 10) {
      setHeight(treeHeight);
    }
  };

  return (
    <div className="heightController">
      <label htmlFor="height">
        <span>Set tree height:</span>
        <input id="height" type="number" value={height} onChange={updateTreeHeight} />
      </label>
    </div>
  );
};

TreeHeightController.propTypes = {
  height: PropTypes.number.isRequired,
  setHeight: PropTypes.func.isRequired,
};

export default TreeHeightController;
