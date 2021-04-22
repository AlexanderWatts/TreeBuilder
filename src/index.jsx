import React from 'react';
import { render } from 'react-dom';
import TreeState from './components/TreeState';
import './styles.css';

const App = () => (
  <TreeState />
);

render(<App />, document.getElementById('root'));
