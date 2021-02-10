import React, { useContext } from 'react';
import { ShapesContext } from "./ShapesContext";
import { Layer, Stage } from "react-konva";
import { TOOL_TYPES } from "./shapes/constants";
import { nanoid } from "nanoid";


const DrawingArea = () => {
  const [ toolMode, setToolMode ] = useContext(ShapesContext).toolMode;
  const [ isDrawing, setIsDrawing ] = useContext(ShapesContext).isDrawing;
  // const [ selected , setSelected ] = useContext(ShapesContext).selected;
  const [ shapes, setShapes ] = useContext(ShapesContext).shapes;

  const handleCanvasClick = (e) => {
    console.log('Mouse Clicked')
    // If tool mode is select
    if (toolMode === TOOL_TYPES.SEL) {
      // Deselect shape
      return;
    }
    // If we are already drawing a shape
    if (isDrawing) {
      // Terminate drawing new shape
      setIsDrawing(!isDrawing);
    } else if (!isDrawing) { // If we are not drawing
      // Start a new shape
      let id = nanoid();
      let newShape = {
        id,
        type: toolMode,
        x: e.evt.layerX,
        y: e.evt.layerY,
        width: 0,
        height: 0,
        fill: null,
        stroke: '#000000',
      }
      // update state
      setShapes( (draft) => {
        draft[id] = newShape
      })
    }
  }

  const handleMouseMove = (e) => {
    console.log('MOVED.....')
    // If we are not drawing
      // Do nothing
    // If we are drawing a shape
      // get current mouse positions
      // Update the shapes width/height based on mouse position
  }

  return (
    <main id="drawing">
      <Stage
      width={window.innerWidth - 450}
      height={(window.innerWidth - 450) * (22/17)}
      onContentClick={handleCanvasClick}
      onContentMousemove={handleMouseMove}
      >
        <Layer>
        </Layer>
      </Stage>
    </main>
  )
}

export default DrawingArea
