import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Galleries from "./Galleries";
import Details from "./Details/Details";
import NotFound from './NotFound';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Galleries}/>
          <Route exact path='/not-found' component={NotFound}/> 
          <Route exact path='/:galleryId' component={Details}/>
        </div>
      </Router>
    );
  }
}


export default App;
