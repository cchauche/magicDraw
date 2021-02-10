import React, { useContext } from 'react';
import { ShapesContext } from "./ShapesContext";
import Shape from './shapes/Shape';
import { Layer, Stage } from "react-konva";
import { TOOL_TYPES } from "./shapes/constants";
import createShape from "./helpers/createHelpers.js";


const DrawingArea = () => {
  const [ toolMode ] = useContext(ShapesContext).toolMode;
  const [ drawing, setDrawing ] = useContext(ShapesContext).drawing;
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
    if (drawing) {
      // Terminate drawing new shape
      setDrawing(null);
    } else if (drawing === null) { // If we are not drawing
      // Start a new shape
      let mouseX = e.evt.layerX;
      let mouseY = e.evt.layerY;
      let newShape = createShape(toolMode, mouseX, mouseY);

      // Update State
      setShapes( (draft) => {
        draft[newShape.id] = newShape
      })
      setDrawing(newShape.id);
    }
  }

  const handleMouseMove = (e) => {
    console.log('MOVED.....')
    // If we are not drawing - do nothing
    if (!drawing) return;
    // Otherwise
    const mouseX = e.evt.layerX;
    const mouseY = e.evt.layerY;
    const newWidth = mouseX - shapes[drawing].x;
    const newHeight = mouseY - shapes[drawing].y;

    // Update the shapes width/height based on mouse position
    setShapes((draft) => {
      draft[drawing].width = newWidth;
      draft[drawing].height = newHeight;
    })
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
          {Object.entries(shapes).map(([key, shape]) => {
            return <Shape key={key} shape={shape}/>
          })}
        </Layer>
      </Stage>
    </main>
  )
}

export default DrawingArea
