import React from 'react';
import profile from '../img/profile.png';

const AboutPage = () => {
  return (
    <>
      <div className="container">
        <div className="about-section">
          <img src={profile} alt="profile" className="profile-image" />
          <h2>David Cervellon</h2>
          <h3>Front End Developer</h3>
          <p>
            App: <span>Country Finder</span>
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
