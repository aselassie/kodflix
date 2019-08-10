import React from "react";
import "./App.css";
import fifty from "./50_50.jpg";
import nemo from "./nemo.jpg";
import takeball from "./takeball.jpg";
import toystory from "./toystory.jpeg";
import tsmm from "./tsmm.jpg";
import talk from "./hable_con_ella.jpg";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Kodflix</h1> */}
      <div className="container">
        <div className="item">
          <img src={fifty} alt="50/50 poster" />
        </div>
        <div className="item">
          <img src={nemo} alt="finding nemo poster" />
        </div>
        <div className="item">
          <img src={takeball} alt="take the ball poster" />
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src={toystory} alt="toy story poster" />
        </div>
        <div className="item">
          <img src={tsmm} alt="all about poster" />
        </div>
        <div className="item">
          <img src={talk} alt="talk to her poster" />
        </div>
      </div>

      <div className="wrapper">
        <div className="element">Amelie</div>
        <div className="element">Finding Nemo</div>
        <div className="element">Take The Ball Pass The Ball</div>
      </div>
      <div className="wrapper">
        <div className="element">Toy Story 4</div>
        <div className="element">Todo Sobre Mi Madre</div>
        <div className="element">Hable Con Ella</div>
      </div>
    </div>
  );
}

export default App;
