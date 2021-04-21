import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CurrentTreeContext = createContext();

export const CurrentTreeContextProvider = ({ children }) => {
  const [treeStats, setTreeStats] = useState({});

  return (
    <CurrentTreeContext.Provider value={{ treeStats, setTreeStats }}>
      {children}
    </CurrentTreeContext.Provider>
  );
};

CurrentTreeContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
