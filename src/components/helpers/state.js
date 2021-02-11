import { createStore } from "@halka/state";
import produce from "immer";
import { TOOL_TYPES } from "../shapes/constants";

const baseState = {
  drawing: null,
  toolMode: TOOL_TYPES.SEL,
  selected: '',
  shapes: {},
}

export const useStore = createStore(baseState);

export const setStore = (fn) => useStore.set(produce(fn));

export const setToolMode = (mode) => {
  setStore((draft) => {
    draft.toolMode = mode;
  });
}

export const resetDrawing = () => {
  setStore((draft) => {
    draft.drawing = baseState.drawing;
  })
}

export const setSelected = (id) => {
  console.log('SettingSelected to: ', id);
  setStore((draft) => {
    draft.selected = id;
  })
}

export const resetSelected = () => {
  setStore((draft) => {
    draft.selected = baseState.selected;
  })
}

export const moveShape = (id, event) => {
  setStore((draft) => {
    const shape = draft.shapes[id];

    if (shape) {
      shape.x = event.target.x();
      shape.y = event.target.y();
    }
  });
}

export const transRect = (node, id, event) => {
  console.log('Transformed')
}
