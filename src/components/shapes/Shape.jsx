import React from 'react';
import { TOOL_TYPES } from "./constants";
import Rectangle from './Rectangle';

const Shape = ({ shape }) => {
  if (shape.type === TOOL_TYPES.RECT) {
    return <Rectangle {...shape} />
  }
  return null;
}

export default Shape
