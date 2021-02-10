import React from "react";
import PropertiesPanel from "./PropertiesPanel";
import ToolBar from "./ToolBar";
import DrawingArea from "./DrawingArea";

const App = (props) => {
  return (
      <div id="app">
        <ToolBar />
        <DrawingArea />
        <PropertiesPanel />
      </div>
  );
};

export default App;
