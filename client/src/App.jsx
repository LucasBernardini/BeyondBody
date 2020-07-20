import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./App.scss";
import Navbar from "./navbar/navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Journal from "./pages/journal/journal";
import Menu from "./pages/menu/menu";

firebase.initializeApp({
  apiKey: "AIzaSyBvmnNBQp3DSf4rKhI5d4b9qqMTqwS34WQ",
  authDomain: "beyond-body.firebaseapp.com",
});

class App extends React.Component {
  state = { isSignedIn: false };
  
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login isSignedIn={this.state.isSignedIn}/>
            </Route>
            <Route path="/journal">
                <Journal isSignedIn={this.state.isSignedIn} />
            </Route>
            <Route>
              <Menu isSignedIn={this.state.isSignedIn}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
