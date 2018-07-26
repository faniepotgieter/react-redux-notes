import { SELECT_NOTE, CHANGE_BODY } from "./types";

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
