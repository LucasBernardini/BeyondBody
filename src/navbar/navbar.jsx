import React from 'react'
import './navbar.scss'
import firebase from "firebase";
import { useHistory, Link } from "react-router-dom";


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
        <Link exact to="/">
        <button className="navbar__button" onClick={firebase.auth().signOut().then(() => history.push("/"))} >SignOut</button>
        </Link>
        </div>
          </div>
        ) : (
            <div className="navbar">
            <div>
            <h1 className="navbar__header">Beyond <br />Body</h1>
            </div>
            <div>
            <Link exact to="/login">
            <button className="navbar__button signIn">SignIn</button>
            </Link>
            </div>
            </div>
        )}
        </div>
    )
}
