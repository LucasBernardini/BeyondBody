import React from 'react'
import './home.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <div className="home__body">
            <p>Hello, Welcome to Beyond Body, a journalling experience that allows you to express your emotions and thoughts to improve your overall mental health.</p>
            </div>
            <Link to="/login">
            <button className="home__button"><span>Continue</span></button>
            </Link>
        </div>
    )
}
