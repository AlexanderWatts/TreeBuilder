import React, { useContext, useState } from 'react';
import { TreeHeightContext } from '../../contexts/TreeHeightContext';
import './styles.css';

const Controls = () => {
  const { treeHeight, setTreeHeight } = useContext(TreeHeightContext);
  const [errors, setErrors] = useState([]);

  const updateTreeHeight = (event) => {
    const { value } = event.target;

    if (value >= 0 && value <= 10) {
      setTreeHeight(value);
      setErrors([]);
    } else {
      setErrors([{
        message: 'Enter a value between 1 and 10!',
      }]);
    }
  };

  const displayErrors = () => errors.map(({ message }) => <div className="errors" key={message}>{message}</div>);

  return (
    <div className="controls">
      <label htmlFor="levels">
        <div>Enter Tree Height:</div>
        {displayErrors()}
        <input id="levels" type="number" value={treeHeight} onChange={updateTreeHeight} />
      </label>
    </div>
  );
};

export default Controls;
