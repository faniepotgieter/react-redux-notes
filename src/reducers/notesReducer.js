import { SELECT_NOTE } from "../actions/types";

const initialState = {
  notesList: [
    { id: 1, title: "Title 1", body: "Body 1", edited: new Date() },
    { id: 2, title: "Title 2", body: "Body 2", edited: new Date() },
    { id: 3, title: "Title 3", body: "Body 3", edited: new Date() }
  ],
  selectedNote: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return {
        ...state,
        selectedNote: action.payload
      };
    default:
      return state;
  }
};
