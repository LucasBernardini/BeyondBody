import React from 'react'
import {
    Link
  } from "react-router-dom";
import './footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
            <div className="footer__container--1">
                <Link exact to="/"className="footer__direct">Home</Link>
                <Link to="/about"className="footer__direct">About</Link>
            </div>
            <div className="footer__container--2">
                <p>Are you seeking help? Visit Canadas <a className="footer__help" href="https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html">Mental Health support page</a></p>
            </div>
            </div>
        </div>
    )
}
