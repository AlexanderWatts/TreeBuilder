import React from 'react';
import { render } from 'react-dom';
import { TreeHeightContextProvider } from './contexts/TreeHeightContext';
import { CurrentTreeContextProvider } from './contexts/CurrentTreeContext';
import Controls from './components/Controls';
import Tree from './components/Tree';
import TreeStats from './components/TreeStats';

const App = () => (
  <>
    <TreeHeightContextProvider>
      <CurrentTreeContextProvider>
        <Controls />
        <Tree />
        <TreeStats />
      </CurrentTreeContextProvider>
    </TreeHeightContextProvider>
  </>
);

render(<App />, document.getElementById('root'));
