import React from 'react';
import Shape from './shapes/Shape';
import { Layer, Stage } from "react-konva";
import { TOOL_TYPES } from "./shapes/constants";
import createShape from "./helpers/createHelpers.js";
import {useStore, setStore, resetDrawing, resetSelected } from './helpers/state';


const DrawingArea = () => {
  const shapes = useStore((state) => state.shapes);
  const toolMode = useStore((state) => state.toolMode);
  const drawing = useStore((state) => state.drawing);
  const selected = useStore((state) => state.selected);
  console.log('Current Selected: ', selected);

  const handleCanvasClick = (event) => {
    console.log('Mouse Clicked')
    // If tool mode is select
    if (toolMode === TOOL_TYPES.SEL) {
      if (!event.evt.cancelBubble) resetSelected();
      return;
    }
    // If we are already drawing a shape
    if (drawing) {
      // Terminate drawing new shape
      resetDrawing();
    } else if (drawing === null) { // If we are not drawing
      // Start a new shape
      let mouseX = event.evt.layerX;
      let mouseY = event.evt.layerY;
      let newShape = createShape(toolMode, mouseX, mouseY);

      // Update State
      setStore( (draft) => {
        draft.shapes[newShape.id] = newShape
      })
      setStore((draft) => {draft.drawing = newShape.id});
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
    setStore((draft) => {
      draft.shapes[drawing].width = newWidth;
      draft.shapes[drawing].height = newHeight;
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
