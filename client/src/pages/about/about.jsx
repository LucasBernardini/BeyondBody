import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";
import linkedIn from "../../assets/logos/logo-linkedin.svg";
import email from "../../assets/logos/mail.svg";
import profilePic from "../../assets/images/profilePic.jpg"

export default function About() {
  return (
    <div>
      <h1 className="about__header">Beyond Body - Your Personal Journal</h1>
      <div className="about">
        <div className="about__container">
          <h2 className="about__sub">About The App</h2>
          <p className="about__content">
            BeyondBody was created to address the growing concerns of mental
            health challenges people are faced with. These challenges have been
            increasing at an alarming rate, especially in youth and young
            adults. To top it all off, our current global setting due to
            COVID-19 has made society less interactive leaving many individuals
            alone for long periods of time.
            <br />
            <br />
            BeyondBody is an outlet for our users to express their thoughts and
            feelings through journaling. Journaling can be used for multiple
            reasons, with the goal to clear someone's mind, promote healthy
            habits and reflect back on the thoughts they have written down. If
            you know someone in need of an outlet, please reach out to them and
            share this website!
          </p>
        </div>
        <div className="about__container">
          <h2 className="about__sub">About the Creator</h2>
          <h3 className="about__name">Lucas Bernardini</h3>
          <div className="about__container--bio">
          <img className="about__profilePic" src={profilePic} alt="profile photo"/>
          <p className="about__content">
            Lucas is a recent graduate from Brainstations immersive 12 week Web
            Development Bootcamp. His working experience stems from a background
            in banking and finance. Lucas has made the career transition to
            becoming a developer due to his passion for technology, creativity
            and problem solving. He is currently open and available to work,
            feel free to reach out through one of the methods listed below!
          </p>
          </div>
          <div className="about__contact">
            <a href="https://www.linkedin.com/in/lucas-bernardini/">
              <img className="about__contact--link" src={linkedIn} alt="" />
            </a>
            <a href="mailto: lucas.bernardini97@gmail.com">
              <img className="about__contact--link" src={email} alt="" />
            </a>
            <p className="about__contant--number">(416) 573 1523</p>
          </div>
        </div>
      </div>
      <Link to="/menu">
        <button className="about__button">Back To Menu</button>
      </Link>
    </div>
  );
}
