import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Workout from "./components/Workout";

const App = () => (
  <Router>
    <Switch>
      {" "}
      <Route exact path="/" component={Home} />
      <Route exact path="/workout" component={Workout} />
    </Switch>
  </Router>
);

export default App;
