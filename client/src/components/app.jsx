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

    this.handleCanvasMouseMove = this.handleCanvasMouseMove.bind(this);
    this.handleToolButtonClick = this.handleToolButtonClick.bind(this);
  }

  handleCanvasClick (event) {
    // If tool mode !==
  }

  handleCanvasMouseMove (event) {
  }

  handleToolButtonClick (event) {
    console.log('Tool Clicked...')
    event.preventDefault();
    this.setState({
      toolMode: event.target.dataset.tool
    })
  }

  render () {
    return (
      <div id="app">
        <ToolBar
          handleButtonClick={this.handleToolButtonClick}
        />
        <DrawingArea />
        <PropertiesPanel />
      </div>)
  }
}

export default App;
