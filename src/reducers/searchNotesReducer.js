import { SEARCH_NOTES } from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NOTES:
      return action.payload.searchTerm;

    default:
      return state;
  }
};
