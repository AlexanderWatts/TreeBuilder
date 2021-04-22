import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TreeSort = ({ sorted, setSorted }) => {
  const toggleTreeSort = () => setSorted(!sorted);

  return (
    <button type="button" className="sorter" onClick={toggleTreeSort}>
      {sorted ? 'Unsort' : 'Sort'}
      <span>Tree</span>
    </button>
  );
};

TreeSort.propTypes = {
  sorted: PropTypes.bool.isRequired,
  setSorted: PropTypes.func.isRequired,
};

export default TreeSort;
