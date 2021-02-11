import React, { useCallback } from 'react';
import { TOOL_TYPES } from "./constants";
import Rectangle from './Rectangle';
import TextBox from './TextBox';
import Ellipse from "./Ellipse";
import { useStore } from "../helpers/state";

const Shape = ({ shape }) => {
  const isSelectedSelector = useCallback(
    (state) => {
      return state.selected === shape.id
    },
    [shape],
  )
  const isSelected = useStore( isSelectedSelector );

  if (shape.type === TOOL_TYPES.RECT) {
    return <Rectangle {...shape} isSelected={isSelected} />
  } else if (shape.type === TOOL_TYPES.TEXT) {
    return <TextBox {...shape} isSelected={isSelected} />
  } else if (shape.type === TOOL_TYPES.ELLI) {
    return <Ellipse {...shape} isSelected={isSelected} />
  }
  return null;
}

export default Shape
