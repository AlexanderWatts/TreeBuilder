import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Sidebar = ({ children }) => (
  <div className="sidebar">
    {children}
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Sidebar;
