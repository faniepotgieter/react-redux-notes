import { SELECT_NOTE, CHANGE_BODY, NEW_NOTE, DELETE_NOTE } from "./types";

export const selectNote = id => {
  return {
    type: SELECT_NOTE,
    payload: id
  };
};

export const changeBody = (id, body) => {
  return {
    type: CHANGE_BODY,
    payload: {
      id,
      body
    }
  };
};

export const newNote = () => {
  const id = "note-" + new Date().getTime();
  return {
    type: NEW_NOTE,
    payload: {
      id
    }
  };
};

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: {
      id
    }
  };
};
