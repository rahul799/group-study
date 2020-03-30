import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";

export default class Login extends Component {
  render() {
    const responseFacebook = (response) => {
      console.log(response);
    };

    // const responseGoogle = (response) => {
    //   console.log(response);
    // };

    return (
      <form>
        <h3>Sign In</h3>

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
          <label>Sign-In WITH FACEBOOK</label>
          <FacebookLogin
            appId="175306446764360" //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div>

        {/* <div className="form-group">
          <label>LOGIN WITH Google</label>
          <GoogleLogin
            clientId="587387296925-o90s2db7immn0693t4b1e7n5qiec4sl2.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div> */}

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
