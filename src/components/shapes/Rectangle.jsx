import React, { useCallback } from 'react';
import { Rect as KonvaRect } from "react-konva";
import { useStore, setSelected, moveShape } from "../helpers/state";


const Rectangle = (props) => {
  const drawing = useStore((state) => state.drawing);

  const handleSelect = useCallback(
    (event) => {
      event.evt.resetSelected = true;
      if (!drawing) {
        setSelected(props.id);
      }
    },
    [props.id],
  )

  const handleDrag = useCallback(
    (event) => {
      moveShape(props.id, event)
    },
    [props.id],
  )

  return (
    <KonvaRect
      onClick={handleSelect}
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      fill={props.fill}
      stroke={props.stroke}
      draggable
      onDragStart={handleSelect}
      onDragEnd={handleDrag}
    />
  )
}

export default Rectangle
