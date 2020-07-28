import React from "react";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import "./login.scss";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export default class Login extends React.Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: (user) => user.uid,
    },
  };

  render() {
    return (
      <div className="login">
        {this.props.isSignedIn ? (
          <div>
            <Redirect to="/menu" />
          </div>
        ) : (
          <StyledFirebaseAuth
            className="login__config"
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}
