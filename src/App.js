import React, { Component } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoryResult from "./components/Categories/CategoryResult";
import SearchResult from "./components/SearchBar/SearchResult";
import NotFound from "./components/NotFound";
import SignUp from "./components/User/SignUp";
import Login from "./components/User/LogIn";
import IndividualCategory from "./components/Categories/IndividualCategory";
import AllCategories from "./components/Categories/AllCategories";
import "./CSS/App.css";
import "./index.css";
import api from "./api";
import FunFact from "./components/FunFact";
import AddProduct from "./components/AddProduct";
import Grandquizz from "./components/Quizz/Grandquizz";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);

    // const { currentUser } = props;
    this.state = {
      currentUser: null,
      isLoginChecked: false,
      inputValue: "",
      facts: ""
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
    this.setState({
      currentUser: userDoc,
      isLoginChecked: true
    });
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
    const { currentUser, isLoginChecked } = this.state;
    return (
      <div>
        <React.Fragment>
          <style>
            @import
            url("https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed|Lobster+Two|Oswald:600");
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
              integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
              crossOrigin="anonymous"
            />
          </style>
        </React.Fragment>

        <header>
          <NavLink exact to="/" className="app-title">
            Recyclez-moi
          </NavLink>

          <NavLink exact to="/" className="nav-link">
            Accueil
          </NavLink>

          {!currentUser && (
            <NavLink to="/signup" className="nav-link">
              Inscription
            </NavLink>
          )}
          {!currentUser && (
            <NavLink to="/login" className="nav-link">
              Connection
            </NavLink>
          )}

          {currentUser && (
            <NavLink
              to="/"
              onClick={() => this.logOutClick()}
              className="nav-link"
            >
              Déconnection
            </NavLink>
          )}
        </header>

        <section className="search-form">
          <SearchBar handleEvent={event => this.handleEvent(event)} />
        </section>

        <Switch>
          <Route
            path="/quizz"
            render={() => <Grandquizz inputValue={this.state.quizQuestions} />}
          />

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
          <Route
            path="/facts"
            render={() => <FunFact facts={this.state.facts} />}
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

          <Route
            path="/add"
            render={() =>
              !isLoginChecked ? (
                <p>Loading...</p>
              ) : !currentUser ? (
                <Redirect to="/login" />
              ) : (
                <AddProduct
                  currentUser={currentUser}
                  addedProduct={userDoc => this.updateUser(userDoc)}
                />
              )
            }
          />

          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made with 🎉 by <a target="_blank" href="https://www.linkedin.com/in/manonsalaun/">Manon</a>, <a target="_blank" href="https://www.linkedin.com/in/julie-m%C3%A9nard/">Julie</a> and <a target="_blank" href="https://www.linkedin.com/in/abisummers/">Abi</a></p>

        </footer>
      </div>
    );
  }
}

export default App;
