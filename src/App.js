import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoryResult from "./components/Categories/CategoryResult";
import SearchResult from "./components/SearchBar/SearchResult";
import NotFound from "./components/NotFound";
import SignUp from "./components/User/SignUp";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup" component={SignUp}>
            Sign up
          </NavLink>
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/category-result" component={CategoryResult} />
          <Route exact path="/search-result" component={SearchResult} />
          <Route path="/signup" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
