import React from 'react';
import { render } from 'react-dom';
import { TreeHeightContextProvider } from './contexts/TreeHeightContext';
import Controls from './components/Controls';
import Tree from './components/Tree';

const App = () => (
  <>
    <TreeHeightContextProvider>
      <Controls />
      <Tree />
    </TreeHeightContextProvider>
  </>
);

render(<App />, document.getElementById('root'));
