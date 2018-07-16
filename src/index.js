import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import App from "./components/App";

const initialState = {
  notes: [
    { id: 1, title: "Title 1", body: "Body 1", edited: new Date() },
    { id: 2, title: "Title 2", body: "Body 2", edited: new Date() },
    { id: 3, title: "Title 3", body: "Body 3", edited: new Date() }
  ]
};

const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
