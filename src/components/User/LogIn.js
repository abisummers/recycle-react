import React, { Component } from "react";
import api from "../../api";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      originalPassword: "",
      showModal: false,
      loading: false,
      error: null
    };
  }

  openModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
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
      <section className="login-container">
<<<<<<< HEAD
        <h2>Login</h2>
=======
>>>>>>> 452ba03c63d99f41fd305fa382560780932aaad3
        <div className="log-sign-form">
          <h2>Login</h2>
          <form onSubmit={event => this.handleSubmit(event)}>
            <label>
              visible=
              {this.state.showModal}
              onCloseModal=
              {this.closeModal.bind(this)}
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
              Password:
              <input
                type="password"
                name="originalPassword"
                onChange={event => this.loginForm(event)}
                value={originalPassword}
                placeholder="it's a secret"
              />
            </label>

            <button>Login</button>
            <Link to="signup">Or sign up</Link>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
