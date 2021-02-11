import React, { useCallback, useRef, useEffect } from 'react';
import { Ellipse as KonvaElli, Transformer } from "react-konva";
import { useStore, setSelected, moveShape, transRect } from "../helpers/state";


const Ellipse = (props) => {
  const drawing = useStore((state) => state.drawing);
  const shapeRef = useRef();
  const transRef = useRef();

  useEffect(() => {
    if (props.isSelected) {
      transRef.current.nodes([shapeRef.current]);
      transRef.current.getLayer().batchDraw();
    }
  }, [props.isSelected])

  const handleSelect = useCallback(
    (event) => {
      event.evt.cancelBubble = true;
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
      transRect(shapeRef.current, props.id, event)
    },
    [props.id],
  )

  return (
    <>
    <KonvaElli
      ref={shapeRef}
      onClick={handleSelect}
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      rotation={props.rotation ?? 0}
      draggable={props.isSelected}
      onDragStart={handleSelect}
      onDragEnd={handleDrag}
      onTransformEnd={handleTransform}
    />
    {props.isSelected && (
      <Transformer
        ref={transRef}
        anchorSize={5}
        borderDash={[6, 2]}
      />
    )}
    </>
  )
}

export default Ellipse
