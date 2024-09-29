//AboutMe.js, Ligeng Cai, 301286463, 9/28/2024 
import React from 'react';

function AboutMe() {
  return (
    <div className="about-me">  
      <h2>About Me</h2>
      <p>Hello! My name is Ligeng Cai, a game programming student at Centennial College.</p>
      <p>Here is My Resume</p>
      <a href={require('../assets/resume.pdf')} target="_blank" rel="noopener noreferrer">
        Download My Resume
      </a>
    </div>
  );
}

export default AboutMe;
