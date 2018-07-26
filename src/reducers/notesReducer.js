import { CHANGE_BODY } from "../actions/types";
import { combineReducers } from "redux";

const note = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_BODY:
      return {
        ...state,
        body: action.payload.body,
        edited: new Date()
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_BODY:
      const { id, body } = action.payload;

      return {
        ...state,
        [id]: note(state[id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.id];

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds
});
