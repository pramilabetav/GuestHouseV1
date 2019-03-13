import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";
import ReactDOM from "react-dom";
// import HomePage from "./Containers/HomePage.js";
import App from "./Containers/App.js";

// import "./styles.css";
import "./Styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
