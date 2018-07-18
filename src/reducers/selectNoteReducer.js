import { SELECT_NOTE } from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return action.payload;

    default:
      return state;
  }
};
