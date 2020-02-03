import React from 'react';
import './App.css';
import Header from "./Component/header/Header";
import Navbar from "./Component/navbar/Navbar";
import Home from "./Component/Home/Home";
import TimeManagment from "./Component/timeManagment/timeManagment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



function App() {
  return (
      <Router>
      <div className="mainWrapper">
        <div className="Header"><Header/></div>
          <div className="WorkZone">
              <div className="Navbar"><Navbar/></div>
              <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/timeManagment">
                  <TimeManagment />
              </Route>
          </Switch>
          </div>
      </div>
      </Router>
  );
}

export default App;
