import React from 'react';
import PropertiesPanel from "./PropertiesPanel";
import ToolBar from "./ToolBar";
import DrawingArea from './DrawingArea';

function App() {
  return (
  <div id="app">
    <ToolBar />
    <DrawingArea />
    <PropertiesPanel />
  </div>)
}

export default App;
