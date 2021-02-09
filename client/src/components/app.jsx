import React from 'react';
import PropertiesPanel from "./PropertiesPanel";
import ToolBar from "./ToolBar";
import DrawingArea from './DrawingArea';
import { TOOL_TYPES } from "./shapes/constants";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shapes: {},
      toolMode: TOOL_TYPES.SEL,
      selected: {},
      isDrawing: false,
    }
  }

  render () {
    return (
      <div id="app">
        <ToolBar />
        <DrawingArea />
        <PropertiesPanel />
      </div>)
  }
}

export default App;
