import { Shape } from 'konva/types/Shape';
import React, { useState, createContext } from 'react';
import { useImmer } from 'use-immer';
// import { TOOL_TYPES } from "./shapes/constants";

export const ShapesContext = createContext();

export const ShapesProvider = props => {
  const [ isDrawing, setIsDrawing ] = useState(false);
  const [ toolMode, setToolMode ] = useState('select');
  const [ selected , setSelected ] = useState('');
  const [ shapes, setShapes ] = useImmer({});

  const contextValues = {
    shapes: [ shapes, setShapes ],
    selected: [ selected , setSelected ],
    toolMode: [ toolMode, setToolMode ],
    isDrawing: [ isDrawing, setIsDrawing ]
  };

  return (
    <ShapesContext.Provider value ={contextValues} >
      {props.children}
    </ShapesContext.Provider>
  )
}