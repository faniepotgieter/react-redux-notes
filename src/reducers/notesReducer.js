import { CHANGE_BODY, NEW_NOTE, DELETE_NOTE } from "../actions/types";
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

const addNote = (state, action) => {
  const { id } = action.payload;
  const newState = {
    ...state,
    [id]: {
      id,
      body: "",
      edited: new Date()
    }
  };

  return newState;
};

const deleteNote = (state, action) => {
  const { [action.payload.id]: deletedItem, ...newState } = state;

  return newState;
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_BODY:
      const { id } = action.payload;
      return { ...state, [id]: note(state[id], action) };

    case NEW_NOTE:
      return addNote(state, action);

    case DELETE_NOTE:
      return deleteNote(state, action);

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case NEW_NOTE:
      return [action.payload.id, ...state];

    case DELETE_NOTE:
      return state.filter(id => id !== action.payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds
});
