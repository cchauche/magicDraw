import React, { useCallback, useRef } from 'react';
import { Rect as KonvaRect } from "react-konva";
import { useStore, setSelected, moveShape, transRect } from "../helpers/state";


const Rectangle = (props) => {
  const drawing = useStore((state) => state.drawing);
  const shapeRef = useRef();
  const transRef = useRef();

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

  const handleTransform = useCallback(
    (event) => {
      transRect(shapeRef.current, id, event)
    },
    [props.id],
  )

  return (
    <KonvaRect
      ref={shapeRef}
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
      onTransformEnd={handleTransform}
    />
  )
}

export default Rectangle
