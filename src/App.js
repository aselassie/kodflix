import React, { Component } from "react";
import Gallaries from "./Gallaries";
import Stack from "./Stack";
import fifty from "./50_50.jpg";
import nemo from "./nemo.jpg";
import takeball from "./takeball.jpg";
import toystory from "./toystory.jpeg";
import tsmm from "./tsmm.jpg";
import talk from "./hable_con_ella.jpg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <Gallaries />
      </div>
    );
  }
}



export default App;
