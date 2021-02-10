import React, { useContext } from "react";
import { ShapesContext } from "./ShapesContext";
import { TOOL_TYPES } from "./shapes/constants";

const ToolBar = () => {
  const [ toolMode, setToolMode ] = useContext(ShapesContext).toolMode;

  const handleButtonClick = (e) => {
    setToolMode(e.target.value)
  }

  return (
    <aside className="tool-bar">
      <h4>Tools</h4>
      <button onClick={handleButtonClick} value={TOOL_TYPES.SEL}>
        Select
      </button>
      <button onClick={handleButtonClick} value={TOOL_TYPES.RECT}>
        Rect
      </button>
      <button onClick={handleButtonClick} value={TOOL_TYPES.ELLI}>
        Circle
      </button>
      <button onClick={handleButtonClick} value={TOOL_TYPES.TEXT}>
        Text
      </button>
    </aside>
  );
};

export default ToolBar;
