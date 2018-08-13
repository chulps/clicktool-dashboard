import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/Global.css";
import "./CSS/App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Dash from "./components/Dash";
import Transactionspage from "./components/Transactionspage";
import Logoutpage from "./components/Logoutpage";
import Changepassword from "./components/Changepassword";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Navigation className="mb-5" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dash} />
            <Route exact path="/transactions" component={Transactionspage} />
            <Route exact path="/changepassword" component={Changepassword} />
            <Route exact path="/logout" component={Logoutpage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
