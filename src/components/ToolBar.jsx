import React from "react";
import { TOOL_TYPES } from "./shapes/constants";
import { setToolMode, saveShapes, clearShapes } from "./helpers/state";

const ToolBar = () => {

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
        Ellipse
      </button>
      <button onClick={saveShapes} value={'Save'}>
        Save
      </button>
      <button onClick={clearShapes} value={'Clear'}>
        Clear
      </button>
      {/* <button onClick={handleButtonClick} value={TOOL_TYPES.TEXT}>
        Text
      </button> */}
    </aside>
  );
};

export default ToolBar;
