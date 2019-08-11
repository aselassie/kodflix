import React from 'react'
import Stack from "./Stack";
import fifty from "./50_50.jpg";
import nemo from "./nemo.jpg";
import takeball from "./takeball.jpg";
import toystory from "./toystory.jpeg";
import tsmm from "./tsmm.jpg";
import talk from "./hable_con_ella.jpg";

export default function Gallaries() {
    return (
      <div>
        <div className="container">
          <Stack id='5050' name="50/50" logo={fifty} />
          <Stack id='findingnemo' name="Finding Nemo" logo={nemo} />
          <Stack id='taketheball' name="Take The Ball Pass The Ball" logo={takeball} />
          <Stack id='toystory4' name="Toy Story 4" logo={toystory} />
          <Stack id='todosobre' name="Todo Sobre Mi Madre" logo={tsmm} />
          <Stack id='hablecon' name="Hable Con Ella" logo={talk} />
        </div>
      </div>
    );
  }