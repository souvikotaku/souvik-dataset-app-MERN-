import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./component/Home";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path='/update' component={Updatemodal}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
