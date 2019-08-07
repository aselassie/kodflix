import React from 'react';
import './App.css';
import amelie from './amelie.jpg';
import nemo from './nemo.jpg';
import takeball from './takeball.jpg';
import toystory from './toystory.jpeg';
import tsmm from './tsmm.jpg';
import talk from './hable_con_ella.jpg';

function App() {
  return (
    <div className="App">
      
          {/* <h1>Welcome to Kodflix</h1> */}
           <div className='container'>
            <img src={amelie} alt='amelie poster'/>
            <img src={nemo} alt='finding nemo poster'/>
            <img src={takeball} alt='take the ball poster'/>
            <img src={toystory} alt='toy story poster'/>
            <img src={tsmm} alt='all about poster'/>
            <img src={talk} alt='talk to her poster'/>
           </div>
           <div className='titles'>
            <h1>Amelie</h1>
            <h1>Finding Nemo</h1>
            <h1>Take The Ball Pass The Ball</h1>
            <h1>Toy Story 4</h1>
            <h1>Todo Sobre Mi Madre</h1>
            <h1>Hable Con Ella</h1>
           </div>
          
    </div>
  );
}

export default App;