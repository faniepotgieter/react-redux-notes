import { SELECT_NOTE, CHANGE_BODY, NEW_NOTE, DELETE_NOTE } from "./types";

export const selectNote = id => {
  return (dispatch, getState) => {
    const state = getState();
    const allIds = state.notes.allIds;

    if (!id && allIds && allIds[0]) {
      id = allIds[0];
    }

    dispatch({
      type: SELECT_NOTE,
      payload: {
        id
      }
    });
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

export const deleteNote = (id, callback) => {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_NOTE,
      payload: {
        id
      }
    });
    callback();
  };
};
