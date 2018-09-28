import React, { Component } from "react";
import api from "../../api";

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
    console.log(value);

    this.setState({
      [name]: value
    });
  }

  submitSignupForm(event) {
    event.preventDefault();
    console.log(this.state);
    api
      .post("/signup", this.state)
      .then(res => {
        console.log("sign up", res.data);
        const { onSignUp } = this.props;
        onSignUp(res.data.userDoc);
      })
      .catch(err => {
        console.log(err);
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

    return (
      <section>
        <h2>Sign Up</h2>
        <div className="log-sign-form">
          <form onSubmit={event => this.submitSignupForm(event)}>
            <label>
              Full Name:
              <input
                onChange={event => this.signup(event)}
                name="fullName"
                value={fullName}
                type="text"
                placeholder="Enter your name"
              />
            </label>

            <label>
              Email:
              <input
                onChange={event => this.signup(event)}
                name="email"
                value={email}
                type="email"
                placeholder="hello@me.com"
              />
            </label>

            <label>
              Password:
              <input
                onChange={event => this.signup(event)}
                name="originalPassword"
                value={originalPassword}
                type="password"
                placeholder="it's a secret"
              />
            </label>
            <button>Sign Up</button>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;
