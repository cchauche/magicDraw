import { createStore } from "@halka/state";
import produce from "immer";
import { nanoid } from "nanoid";
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

