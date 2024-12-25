import React from 'react';
import './About.css';
import rohanImage from '../../images/rohan.png';
import anishImage from '../../images/anish.png';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Expert tutoring from Berkeley graduates and tech industry professionals</p>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        
        <div className="founders">
          <div className="founder-card">
            <div className="founder-image">
              <img src={rohanImage} alt="Rohan Ramani" />
            </div>
            <h3>Rohan Ramani</h3>
            <p className="title">Co-Founder & Lead Tutor</p>
            <p className="bio">
              A UC Berkeley graduate with over 3 years of tutoring experience, Rohan is passionate about making complex concepts accessible to students of all levels. 
              His educational journey through Challenger School has given him unique insights into the Bay Area education system, allowing him to provide targeted and effective tutoring strategies for students.
            </p>
            <div className="credentials">
              <p> UC Berkeley</p>
              <p> 3+ Years Tutoring Experience</p>
              <p> Challenger School Alumni</p>
            </div>
          </div>

          <div className="founder-card">
            <div className="founder-image">
              <img src={anishImage} alt="Anish Saha" />
            </div>
            <h3>Anish Saha</h3>
            <p className="title">Co-Founder & Lead Tutor</p>
            <p className="bio">
              A UC Berkeley graduate with over 3 years of tutoring experience, Anish combines his strong academic background with proven teaching methods to deliver exceptional tutoring services. 
              Having attended Stratford School, he understands the unique challenges and opportunities in Bay Area education, helping students achieve their academic goals effectively.
            </p>
            <div className="credentials">
              <p> UC Berkeley</p>
              <p> 3+ Years Tutoring Experience</p>
              <p> Stratford School Alumni</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Scholarly, we combine our academic excellence and industry experience to provide a unique tutoring experience. Our mission is to bridge the gap between traditional education and real-world applications, helping students not just excel in their courses, but understand how these concepts apply in the technology industry and beyond.
        </p>
      </div>

      <div className="values-section">
        <h2>Our Approach</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Industry-Informed Teaching</h3>
            <p>We bring real-world examples from our tech industry experience to make learning relevant and engaging</p>
          </div>
          <div className="value-card">
            <h3>Bay Area Expertise</h3>
            <p>Deep understanding of local school systems and educational requirements</p>
          </div>
          <div className="value-card">
            <h3>Personalized Learning</h3>
            <p>Customized curriculum based on each student's goals and learning style</p>
          </div>
          <div className="value-card">
            <h3>Technical Excellence</h3>
            <p>Strong foundation in Computer Science, Mathematics, and STEM subjects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
