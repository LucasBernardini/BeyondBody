import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './App.css';
import Navbar from './navbar/navbar'
import Home from './pages/home/home';
import Login from './pages/login/login';
import Journal from './pages/journal/journal';

firebase.initializeApp({
  apiKey: "AIzaSyBvmnNBQp3DSf4rKhI5d4b9qqMTqwS34WQ",
  authDomain: "beyond-body.firebaseapp.com"
})

class App extends React.Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }  

  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
    })
  }

  render(){
  return (
    <div className="App">
      {this.state.isSignedIn ? (
        <Journal />

      ) : (
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      )}
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Login path="/login"/>
        </Route>
    </Switch>
    </Router>
    </div>
  );
}
}

export default App;
