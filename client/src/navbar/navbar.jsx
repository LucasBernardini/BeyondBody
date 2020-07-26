import React from 'react'
import './navbar.scss'
import firebase from "firebase";
import { BrowserRouter as Link, Redirect, useHistory } from "react-router-dom";

export default function Navbar(props) {
    const history = useHistory();

    return (
        <div className="style">
            {props.isSignedIn ? (
        <div className="navbar">
        <div>
        <h1 className="navbar__header">Beyond <br />Body</h1>
        </div>
        <div>
        <button className="navbar__button" onClick={() => history.push("/")} >Signout</button>
        </div>
          </div>
        ) : (
            <div style={{justifyContent: "center" }} className="navbar">
            <h1 className="navbar__header">Beyond <br />Body</h1>
            </div>
        )}
        </div>
    )
}
