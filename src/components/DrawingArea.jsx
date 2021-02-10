import React from 'react';
import { Layer, Stage } from "react-konva";

const DrawingArea = ({ shapes, handleClick, handleMouseMove }) => {
  return (
    <main id="drawing">
      <Stage
      width={window.innerWidth - 450}
      height={(window.innerWidth - 450) * (22/17)}
      onContentClick={handleClick}
      onContentMousemove={handleMouseMove}
      >
        <Layer>
        </Layer>
      </Stage>
    </main>
  )
}

export default DrawingArea
