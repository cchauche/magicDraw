import React from 'react';
import { Text } from "react-konva";


const TextBox = (props) => {
  return (
    <Text
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      fill={props.fill}
      stroke={props.stroke}
      text={props.text}
      ellipsis={true}
      wrap={'none'}
      align={'center'}
    />
  )
}

export default TextBox
