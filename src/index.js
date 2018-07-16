import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import App from "./components/App";

const initialState = {
  notes: [
    { title: "Title 1", body: "Body 1", timestamp: new Date() },
    { title: "Title 2", body: "Body 2", timestamp: new Date() },
    { title: "Title 3", body: "Body 3", timestamp: new Date() }
  ]
};

const store = createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
