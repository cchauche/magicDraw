import React from 'react';
import { Rect as KonvaRect } from "react-konva";
import { useStore, setSelected } from "../helpers/state";


const Rectangle = (props) => {
  const drawing = useStore((state) => state.drawing);

  const handleSelect = (event) => {
    event.evt.resetSelected = true;
    if (!drawing) {
      setSelected(props.id);
    }
  }

  return (
    <KonvaRect
      onClick={handleSelect}
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
