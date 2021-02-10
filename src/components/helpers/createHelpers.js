import { TOOL_TYPES, SHAPE_DEFAULTS } from "../shapes/constants";
import { nanoid } from "nanoid";

//todo: Function to decide what shape to create
const createShape = (type, x, y) => {
  let id = nanoid();
  if (type === TOOL_TYPES.RECT) {
    return createRectangle(id, x, y);
  } else if (type === TOOL_TYPES.TEXT) {
    return createTextBox(id, x, y);
  }
}

//todo: Function to create a rectangle shape
const createRectangle = (id, x, y) => {
  return Object.assign({...SHAPE_DEFAULTS.RECT}, {id, x, y})
}

//todo: Function to create an ellipse shape

//todo: function to create a text box
const createTextBox = (id, x, y) => {
  return Object.assign({...SHAPE_DEFAULTS.TEXT}, {id, x, y})
}

export default createShape;
