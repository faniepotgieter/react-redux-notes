import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Root from "./Root";

import App from "./components/App";

const initialState = {
  notes: [
    { id: 1, title: "Title 1", body: "Body 1", edited: new Date() },
    { id: 2, title: "Title 2", body: "Body 2", edited: new Date() },
    { id: 3, title: "Title 3", body: "Body 3", edited: new Date() }
  ],
  selectedNote: 1
};

ReactDOM.render(
  <Root initialState={initialState}>
    <App />
  </Root>,
  document.getElementById("root")
);
