import React from 'react'
import './navbar.scss'
import firebase from "firebase";
import { BrowserRouter as Link, Redirect } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div className="navbar">
            {props.isSignedIn ? (
        <div>
        <div>
        <h1 className="navbar__header">Beyond <br />Body</h1>
        </div>
        <div>
        <button className="signout__button" onClick={() => firebase.auth().signOut().then(() => <Redirect exact to="/" />)} >Signout</button>
        </div>
          </div>
        ) : (
            <h1 className="navbar__header">Beyond <br />Body</h1>
        )}
        </div>
    )
}
