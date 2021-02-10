import React from "react";
import PropertiesPanel from "./PropertiesPanel";
import ToolBar from "./ToolBar";
import DrawingArea from "./DrawingArea";
import { ShapesProvider } from "./ShapesContext";

const App = (props) => {
  return (
    <ShapesProvider>
      <div id="app">
        <ToolBar />
        <DrawingArea />
        <PropertiesPanel />
      </div>
    </ShapesProvider>
  );
};

export default App;
