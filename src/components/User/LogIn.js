import React, { Component } from "react";
import api from "../../api";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      originalPassword: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    api
      .post("/login", this.state)
      .then(res => {
        console.log("login", res.data);
        const { onLogin } = this.props;
        onLogin(res.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("something went wrong");
      });
  }

  loginForm(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, originalPassword } = this.state;
    const { currentUser } = this.props;
    console.log(currentUser);

    if (currentUser) {
      return <Redirect to="/" />;
    }

    return (
      <section>
        <h2>Login</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={event => this.loginForm(event)}
              value={email}
              placeholder="hello@me.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="originalPassword"
              onChange={event => this.loginForm(event)}
              value={originalPassword}
              placeholder="it's a secret"
            />
          </label>

          <button>Login</button>
        </form>
      </section>
    );
  }
}

export default Login;
