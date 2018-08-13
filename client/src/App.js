import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/Global.css";
import "./CSS/App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Dash from "./components/Dash";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Navigation className="mb-5" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dash} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
