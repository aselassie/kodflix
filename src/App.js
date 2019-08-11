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
          <div className="element" id='first'>50/50</div>
        </div>
        <div className="item">
          <img src={nemo} alt="finding nemo poster" />
          <div className="element" id="second">Finding Nemo</div> 
        </div>
        <div className="item">
          <img src={takeball} alt="take the ball poster" />
          <div className="element" id="third">Take The Ball Pass The Ball</div>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src={toystory} alt="toy story poster" />
          <div className="element" id="fourth">Toy Story 4</div>
        </div>
        <div className="item">
          <img src={tsmm} alt="all about poster" />
          <div className="element" id="fifth">Todo Sobre Mi Madre</div>
        </div>
        <div className="item">
          <img src={talk} alt="talk to her poster" />
          <div className="element" id="sixth">Hable Con Ella</div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
