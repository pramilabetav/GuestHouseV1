import React from "react";
import Header from "./Header.js";
import HomePage from "./HomePage.js";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
