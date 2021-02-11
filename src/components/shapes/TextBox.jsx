import React from 'react';
import { Text } from "react-konva";


const TextBox = (props) => {
  const handleSelect = (event) => {
    event.evt.resetSelected = true;
    if (!drawing) {
      setSelected(props.id);
    }
  }

  return (
    <Text
      onClick={handleSelect}
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
