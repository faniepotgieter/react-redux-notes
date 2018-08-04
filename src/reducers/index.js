import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import selectNoteReducer from "./selectNoteReducer";
import searchNotesReducer from "./searchNotesReducer";

export default combineReducers({
  notes: notesReducer,
  selectedNote: selectNoteReducer,
  searchTerm: searchNotesReducer
});
