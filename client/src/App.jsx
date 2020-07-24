import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./firebase";
import "./App.scss";
import Navbar from "./navbar/navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Journal from "./pages/journal/journal";
import Menu from "./pages/menu/menu";
import Entries from "./pages/entries/entries";
import About from "./pages/about/about";

class App extends React.Component {
  state = { isSignedIn: false, userUID: "" };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user, userUID: user.uid });
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar isSignedIn={this.state.isSignedIn} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login isSignedIn={this.state.isSignedIn} />
            </Route>
            <Route path="/journal">
              <Journal
                isSignedIn={this.state.isSignedIn}
                userUID={this.state.userUID}
              />
            </Route>
            <Route path="/menu">
              <Menu
                isSignedIn={this.state.isSignedIn}
                userUID={this.state.userUID}
              />
            </Route>
            <Route path="/entrylist">
              <Entries
                isSignedIn={this.state.isSignedIn}
                userUID={this.state.userUID}
              />
            </Route>
            <Route path="/about">
              <About
                isSignedIn={this.state.isSignedIn}
                userUID={this.state.userUID}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
