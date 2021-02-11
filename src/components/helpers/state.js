import { createStore } from "@halka/state";
import produce from "immer";
import { TOOL_TYPES } from "../shapes/constants";

const baseState = {
  drawing: null,
  toolMode: TOOL_TYPES.SEL,
  selected: '',
  shapes: {},
}

const APP_NAME = '__magic_groups__';

export const useStore = createStore(() => {
  const initialState = JSON.parse(localStorage.getItem(APP_NAME));
  return {...baseState, shapes: initialState ?? {} };
});

export const setStore = (fn) => useStore.set(produce(fn));

export const setToolMode = (mode) => {
  setStore((draft) => {
    draft.toolMode = mode;
  });
}

export const saveShapes = () => {
  const state = useStore.get();
  localStorage.setItem(APP_NAME, JSON.stringify(state.shapes));
}

export const clearShapes = () => {
  setStore((draft) => {
    draft.shapes = {};
  })
}

export const resetDrawing = () => {
  setStore((draft) => {
    draft.drawing = baseState.drawing;
  })
}

export const setSelected = (id) => {
  const state = useStore.get();
  if (state.toolMode === TOOL_TYPES.SEL) {
    setStore((draft) => {
      draft.selected = id;
    })
  }
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
  const scaleX = node.scaleX();
  const scaleY = node.scaleY();

  node.scaleX(1);
  node.scaleY(1);

  setStore((draft) => {
    const shape = draft.shapes[id];

    if (shape) {
      shape.x = node.x();
      shape.y = node.y();

      shape.rotation = node.rotation();

      shape.width = node.width() * scaleX;
      shape.height = node.height() * scaleY;
    }
  })
}

export const updateAttribute = (attr, value) => {
  setStore((draft) => {
    const shape = draft.shapes[draft.selected];

    if (shape) {
      shape[attr] = value;
    }
  })
}
