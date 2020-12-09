import React, { Component } from "react";
import "./App.css";
import Canvas from "./components/canvas";

class App extends Component {
    render() {
    return (
      <React.Fragment>
        <main role="main" className="container">
          <Canvas/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
