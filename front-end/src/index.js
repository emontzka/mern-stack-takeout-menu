import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Routes from "./Routes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from "./middleware";
import reducer from "./reducers";

const store = createStore(reducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
