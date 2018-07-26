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
        body: "Body 1",
        edited: new Date("2018-07-20")
      },
      note2: {
        id: "note2",
        body: "Body 2",
        edited: new Date("2018-07-10")
      },
      note3: {
        id: "note3",
        body: "Body 3",
        edited: new Date("2018-07-01")
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
