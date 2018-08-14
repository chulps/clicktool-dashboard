import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/Global.css";
import "./CSS/App.css";
import Navigation from "./COMPONENTS/Navigation";
import Home from "./COMPONENTS/Home";
import Dash from "./COMPONENTS/Dash";
import Transactions from "./COMPONENTS/Transactions"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation className="mb-5" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dash} />
            <Route exact path="/transactions" component={Transactions} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
