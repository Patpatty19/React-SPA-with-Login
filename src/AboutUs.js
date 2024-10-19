import React from 'react';
import './AboutUs.css';
import NavBar from './navbar.js';

const AboutUs = () => {
  return (


    <div><NavBar></NavBar>
    <div className="about-container">
      <div className="about-card">
        <h1>About Our Application</h1>
        <p>
          Our platform is dedicated to providing a seamless and intuitive user experience. We focus on
          creating modern, efficient, and responsive solutions to enhance productivity and engagement. Whether
          you're here to learn or explore, we’re committed to evolving with your needs and providing the best
          experience possible.
        </p>
        <p>
          Our team continuously works to improve and innovate, ensuring that our app stays up-to-date with
          the latest trends and technologies.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;

