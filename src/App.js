import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoryResult from "./components/Categories/CategoryResult";
import SearchResult from "./components/SearchBar/SearchResult";
import NotFound from "./components/NotFound";
import SignUp from "./components/User/SignUp";
import Login from "./components/User/LogIn";
import IndividualCategory from "./components/Categories/IndividualCategory";
import AllCategories from "./components/Categories/AllCategories";
import "./CSS/App.css";
import "./CSS/julie.css";
import "./index.css";
import api from "./api";
import AddProduct from "./components/AddProduct";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      inputValue: ""
    };
  }
  // checks to see if there is a logged in user when the page is loaded
  componentDidMount() {
    api
      .get("/checklogin")
      .then(res => {
        console.log("check login", res.data);
        this.updateUser(res.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("there was a problem");
      });
  }

  handleEvent(searchInput) {
    this.setState({ inputValue: searchInput });
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
        <React.Fragment>
          <style>
            @import
            url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed');
          </style>
        </React.Fragment>

        <header>
          <NavLink exact to="/">
            Home
          </NavLink>

          {!currentUser && <NavLink to="/signup"> Sign up</NavLink>}
          {!currentUser && <NavLink to="/login">Login</NavLink>}

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
            render={() => (
              <HomePage
                currentUser={currentUser}
                handleEvent={event => this.handleEvent(event)}
              />
            )}
          />

          <Route path="/category-result" component={CategoryResult} />
          <Route
            path="/search-result"
            render={() => <SearchResult inputValue={this.state.inputValue} />}
          />

          <Route path="/all-categories" component={AllCategories} />

          {/* link to caterogy page eg glass or plastic */}
          <Route path="/material/:id" component={IndividualCategory} />
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

          <Route path="/add" component={AddProduct} />
          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made by Manon, Julie and Abi</p>
        </footer>
      </div>
    );
  }
}

export default App;
