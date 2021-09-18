import React from 'react';
import profile from '../img/profile.png';

const AboutPage = () => {
  return (
    <>
      <div className="container animate__animated animate__bounceInUp">
        <div className="about-section">
          <img src={profile} alt="profile" className="profile-image" />
          <h2>David Cervellon</h2>
          <h3>Front End Developer</h3>
          <p>
            App: <span>Country Finder</span>
          </p>
          <div className="techs">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-npm"></i>
          </div>
          <div className="contact">
            <p className="contact-p">Contact:</p>

            <a
              href="https://www.linkedin.com/in/elcis-david-cervellon/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/edavid72"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
