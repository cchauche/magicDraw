import React, { useCallback } from 'react';
import { TOOL_TYPES } from "./constants";
import Rectangle from './Rectangle';
import TextBox from './TextBox';
import { useStore } from "../helpers/state";

const Shape = ({ shape }) => {
  console.log('Making Shape: ', shape.id);
  const isSelectedSelector = useCallback(
    (state) => {
      return state.selected === shape.id
    },
    [shape],
  )
  const isSelected = useStore( isSelectedSelector );
  console.log('--isSelected: ', isSelected);

  if (shape.type === TOOL_TYPES.RECT) {
    return <Rectangle {...shape} isSelected={isSelected} />
  } else if (shape.type === TOOL_TYPES.TEXT) {
    return <TextBox {...shape} isSelected={isSelected} />
  }
  return null;
}

export default Shape
