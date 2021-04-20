import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TreeHeightContext = createContext();

export const TreeHeightContextProvider = ({ children }) => {
  const [treeHeight, setTreeHeight] = useState(3);
  return (
    <TreeHeightContext.Provider value={{ treeHeight, setTreeHeight }}>
      {children}
    </TreeHeightContext.Provider>
  );
};

TreeHeightContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
