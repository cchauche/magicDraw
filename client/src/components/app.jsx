import React from 'react';
import PropertyPanel from "./PropertyPanel";
import ToolBar from "./ToolBar";
import DrawingArea from './DrawingArea';

function App() {
  return (
  <div id="container">
    <ToolBar />
    <DrawingArea />
    <PropertyPanel />
  </div>)
}

export default App;
