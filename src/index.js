import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Root from "./Root";

import App from "./components/App";

const initialState = {
  notes: {
    byId: {
      "note-1": {
        id: "note-1",
        body: "Body 1",
        edited: new Date("2018-07-20")
      },
      "note-2": {
        id: "note-2",
        body: "Body 2",
        edited: new Date("2018-07-10")
      },
      "note-3": {
        id: "note-3",
        body: "Body 3",
        edited: new Date("2018-07-01")
      }
    },
    allIds: ["note-1", "note-2", "note-3"]
  },
  selectedNote: "note-1",
  searchTerm: ""
};

ReactDOM.render(
  <Root initialState={initialState}>
    <App />
  </Root>,
  document.getElementById("root")
);
