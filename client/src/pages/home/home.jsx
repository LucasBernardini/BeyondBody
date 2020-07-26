import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import photo from '../../assets/images/home.jpg'

export default function Home() {
  return (
    <div className="home">
      <div className="home__body">
        <p>
          Hello, Welcome to Beyond Body, a journalling experience that allows
          you to express your emotions and thoughts to improve your overall
          mental health. Journalling online allows you access to your notes at
          any given time, on any device. 
          <br />
          <br />
          Health is more than just physical.
          <br />
          <br />
          Take a few moment to reflect on your day and how you are feeling
          overall. When you are ready, click continue and get started.
        </p>
        <img className="home__image" src={photo} alt="zen photo"/>
      </div>
      <Link to="/login">
        <button className="home__button">
          <span>Continue</span>
        </button>
      </Link>
    </div>
  );
}
