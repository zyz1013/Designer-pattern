import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducers } from "./rootReducer";
import { HashRouter as Router } from "react-router-dom";

const store = createStore(rootReducers);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
