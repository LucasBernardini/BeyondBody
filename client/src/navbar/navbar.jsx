import React from 'react'
import './navbar.scss'
import firebase from "firebase";

export default function Navbar() {
    return (
        <div className="navbar">
        <div>
        <h1 className="navbar__header">Beyond <br />Body</h1>
        </div>
        <div>
        <button className="signout__button" onClick={() => firebase.auth().signOut()}>Signout</button>
        </div>
        </div>
    )
}
