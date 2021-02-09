import React from 'react';
import { Rect as KonvaRect } from "react-konva";


const Rectangle = (props) => {
  return (
    <KonvaRect
      x={this.props.x}
      y={this.props.y}
      width={this.props.width}
      height={this.props.height}
      fill={null}
      stroke={'#000'}
    />
  )
}

export default Rectangle
