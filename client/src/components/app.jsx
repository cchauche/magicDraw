import React from 'react';
import PropertiesPanel from "./PropertiesPanel";
import ToolBar from "./ToolBar";
import DrawingArea from './DrawingArea';
import { TOOL_TYPES } from "./shapes/constants";
import produce from "immer";
import { nanoid } from 'nanoid';

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

  handleCanvasClick (e) {
    console.log('Mouse Clicked')
    // If tool mode is select
    if (this.state.toolMode === TOOL_TYPES.SEL) {
      // Deselect shape
      return;
    }
    // If we are already drawing a shape
    if (this.state.isDrawing) {
      // Terminate drawing new shape
      this.setState({
        isDrawing: !this.state.isDrawing
      })
    } else if (!this.state.isDrawing) { // If we are not drawing
      // Start a new shape
      let id = nanoid();
      let newShape = {
        id,
        type: this.state.toolMode,
        x: e.evt.layerX,
        y: e.evt.layerY,
        width: 0,
        height: 0,
        fill: null,
        stroke: '#000000',
      }
      // update state
      this.setState(produce( draft => {
        draft.shapes[id] = newShape
      }));
    }
  }

  handleCanvasMouseMove (e) {
    console.log('MOVED.....')
    // If we are not drawing
      // Do nothing
    // If we are drawing a shape
      // get current mouse positions
      // Update the shapes width/height based on mouse position
  }

  handleToolButtonClick (e) {
    console.log('Tool Clicked...')
    e.preventDefault();
    this.setState({
      toolMode: e.target.dataset.tool
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
