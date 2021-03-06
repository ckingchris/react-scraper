import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";

const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
