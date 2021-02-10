import React from 'react';
import { TOOL_TYPES } from "./constants";
import Rectangle from './Rectangle';
import TextBox from './TextBox';

const Shape = ({ shape }) => {
  if (shape.type === TOOL_TYPES.RECT) {
    return <Rectangle {...shape} />
  } else if (shape.type === TOOL_TYPES.TEXT) {
    return <TextBox {...shape} />
  }
  return null;
}

export default Shape
