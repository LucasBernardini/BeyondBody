import React from 'react'
import './navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar">
        <div>
        <h1 className="navbar__header">Beyond <br />Body</h1>
        </div>
        <div>
        <p className="navbar__streak">streak</p>
        </div>
        </div>
    )
}
