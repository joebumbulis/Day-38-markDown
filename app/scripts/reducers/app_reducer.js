import { createStore } from "redux";
import store from "../store.js";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case "INPUT_KEY":
      return Object.assign({}, state, { note: action.text });
  }
  return state;
}
