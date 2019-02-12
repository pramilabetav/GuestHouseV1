import React from "react";
import ReactDOM from "react-dom";
import Rooms from "./Containers/Rooms.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Rooms />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
