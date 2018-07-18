import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import selectNoteReducer from "./selectNoteReducer";

export default combineReducers({
  notes: notesReducer,
  selectedNote: selectNoteReducer
});
