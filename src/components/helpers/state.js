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

export const useDrawing = createStore(baseState);
