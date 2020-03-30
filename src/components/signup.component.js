import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class SignUp extends Component {
  render() {
    const responseFacebook = (response) => {
      console.log(response);
    };

    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <label>Sign-Up WITH FACEBOOK</label>
          <FacebookLogin
            appId="175306446764360" //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}
