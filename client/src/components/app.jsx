import React from 'react';
import PropertiesPanel from "./PropertiesPanel";
import ToolBar from "./ToolBar";
import DrawingArea from './DrawingArea';
import { TOOL_TYPES } from "./shapes/constants";
import produce from "immer";

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
    this.handleCanvasClick = this.handleCanvasClick.bind(this);
    this.handleToolButtonClick = this.handleToolButtonClick.bind(this);
  }

  handleCanvasClick (event) {
    console.log('Mouse Clicked')
    // If tool mode is select
    // Deselect shape
    // If we are already drawing a shape
    // Terminate drawing new shape
    // If we are not drawing
    // Start a new shape
  }

  handleCanvasMouseMove (event) {
    console.log('MOVED.....')
    // If we are not drawing
      // Do nothing
    // If we are drawing a shape
      // get current mouse positions
      // Update the shapes width/height based on mouse position
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
        <DrawingArea
          shapes={this.state.shapes}
          handleClick={this.handleCanvasClick}
          handleMouseMove={this.handleCanvasMouseMove}
        />
        <PropertiesPanel />
      </div>)
  }
}

export default App;
