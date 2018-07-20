import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Root from "./Root";

import App from "./components/App";

const initialState = {
  notes: {
    byId: {
      note1: {
        id: "note1",
        title: "Title 1",
        body: "Body 1",
        edited: new Date()
      },
      note2: {
        id: "note2",
        title: "Title 2",
        body: "Body 2",
        edited: new Date()
      },
      note3: {
        id: "note3",
        title: "Title 3",
        body: "Body 3",
        edited: new Date()
      }
    },
    allIds: ["note1", "note2", "note3"]
  },
  selectedNote: "note1"
};

ReactDOM.render(
  <Root initialState={initialState}>
    <App />
  </Root>,
  document.getElementById("root")
);
