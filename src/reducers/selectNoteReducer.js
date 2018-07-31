import { SELECT_NOTE, NEW_NOTE } from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return action.payload.id;

    case NEW_NOTE:
      return action.payload.id;

    default:
      return state;
  }
};
