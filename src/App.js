import React from "react";
import Stack from './Stack';
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
      <div className="container">
        <Stack name="50/50" logo={fifty} />
        <Stack name="Finding Nemo" logo={nemo} />
        <Stack name="Take The Ball Pass The Ball" logo={takeball} /> 
      </div>
      <div className="container">
        <Stack name="Toy Story 4" logo={toystory} />
        <Stack name="Todo Sobre Mi Madre" logo={tsmm} />
        <Stack name="Hable Con Ella" logo={talk} />
      </div>
    </div>
  );
}



export default App;
