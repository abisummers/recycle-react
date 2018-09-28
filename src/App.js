import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoryResult from "./components/Categories/CategoryResult";
import SearchResult from "./components/SearchBar/SearchResult";
import NotFound from "./components/NotFound";
import SignUp from "./components/User/SignUp";
import Login from "./components/User/LogIn";
import api from "./api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }
  updateUser(userDoc) {
    this.setState({ currentUser: userDoc });
  }

  logOutClick() {
    api
      .delete("/logout")
      .then(() => {
        this.updateUser(null);
      })
      .catch(err => {
        console.log(err);
        alert("something went wrong");
      });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <header>
          <NavLink exact to="/">
            Home
          </NavLink>

          <NavLink to="/signup"> Sign up</NavLink>

          <NavLink to="/login">Login</NavLink>

          {currentUser && (
            <NavLink to="/" onClick={() => this.logOutClick()}>
              Logout
            </NavLink>
          )}
        </header>

        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage currentUser={currentUser} />}
          />

          <Route path="/category-result" component={CategoryResult} />

          <Route exact path="/search-result" component={SearchResult} />

          <Route
            path="/signup"
            render={() => (
              <SignUp
                // currentUser={currentUser}
                onSignUp={userDoc => this.updateUser(userDoc)}
              />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <Login
                currentUser={currentUser}
                onLogin={userDoc => this.updateUser(userDoc)}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
