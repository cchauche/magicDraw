import React from 'react';
import { Rect as KonvaRect } from "react-konva";


const Rectangle = (props) => {
  return (
    <KonvaRect
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      fill={props.fill}
      stroke={props.stroke}
    />
  )
}

export default Rectangle
