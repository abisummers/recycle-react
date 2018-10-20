import React, { Component } from "react";
import api from "../../api";
import { Link, Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      originalPassword: ""
    };
  }

  signup(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  submitSignupForm(event) {
    event.preventDefault();

    api
      .post("/signup", this.state)
      .then(res => {
        const { onSignUp } = this.props;
        onSignUp(res.data.userDoc);
      })
      .catch(err => {
        alert("there was a mistake");
      });

    this.setState({
      fullName: "",
      email: "",
      originalPassword: ""
    });
  }

  render() {
    const { fullName, email, originalPassword } = this.state;

    if (this.props.currentUser) {
      return <Redirect to="/" />;
    }

    return (
      <section className="loginPage">
        <div className="about">
          <h3>Pourqoui?</h3>
          <p>
            En rejoignant notre site Web, vous pouvez aider les autres recycler.
          </p>
        </div>
        <div className="log-sign-form">
          <h2>Inscription</h2>
          <form onSubmit={event => this.submitSignupForm(event)}>
            <label>
              Nom:
              <input
                onChange={event => this.signup(event)}
                name="fullName"
                value={fullName}
                type="text"
                placeholder="Nom"
              />
            </label>

            <label>
              Adresse e-mail:
              <input
                onChange={event => this.signup(event)}
                name="email"
                value={email}
                type="email"
                placeholder="hello@me.com"
              />
            </label>

            <label>
              Mot de passe:
              <input
                onChange={event => this.signup(event)}
                name="originalPassword"
                value={originalPassword}
                type="password"
                placeholder="mot de passe"
              />
            </label>
            <button>Inscription</button>
            <Link to="/login">Ou connexion</Link>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;
