import React, { useCallback } from "react";
import { useStore, updateAttribute } from "./helpers/state";

const getSelectedShape = (state) => state.shapes[state.selected];

const PropertiesPanel = () => {
  const selectedShape = useStore(getSelectedShape);

  const updateAttr = useCallback((event) => {
    const attr = event.target.name;

    updateAttribute(attr, event.target.value);
  }, []);

  return (
    <aside className="panel">
      <h4>Properties</h4>
      <div className="properties">
        {selectedShape ? (
          <>
            <div className="key">
              Type <span className="value">{selectedShape.type}</span>
            </div>

            <div className="key">
              Stroke{" "}
              <input
                className="value"
                name="stroke"
                type="color"
                value={selectedShape.stroke}
                onChange={updateAttr}
              />
            </div>

            <div className="key">
              Fill{" "}
              <input
                className="value"
                name="fill"
                type="color"
                value={selectedShape.fill}
                onChange={updateAttr}
              />
            </div>
          </>
        ) : (
          <div className="no-data">Nothing Selected</div>
        )}
      </div>
    </aside>
  );
};

export default PropertiesPanel;
