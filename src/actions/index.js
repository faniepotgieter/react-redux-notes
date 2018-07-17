import { SELECT_NOTE } from "./types";

export const selectNote = id => {
  return {
    type: SELECT_NOTE,
    payload: id
  };
};
