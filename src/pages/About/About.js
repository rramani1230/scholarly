import React from 'react';
import './About.css';
import rohanImage from '../../images/rohan.png';
import anishImage from '../../images/anish.png';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="subtitle">Expert tutoring from Berkeley graduates and tech industry professionals</p>
        <div className="mission-statement">
          <p>At Scholarly, we combine our academic excellence and industry experience to provide a unique tutoring experience. 
          Our mission is to bridge the gap between traditional education and real-world applications, helping students not just 
          excel in their courses, but understand how these concepts apply in the technology industry and beyond.</p>
        </div>
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
              A UC Berkeley graduate with a diverse background spanning academia, startups, and industry leaders. Rohan brings unique insights 
              from his roles at Stanford research, Tesla's autonomous systems team, Apple's software division, and Amazon's cloud infrastructure. 
              Throughout his time at Berkeley, he served as a Teaching Assistant and tutor, developing his passion for making complex concepts 
              accessible to students. His educational journey through Challenger School provides deep understanding of Bay Area education, allowing 
              him to create effective learning strategies for students.
            </p>
            <div className="credentials">
              <p>UC Berkeley Graduate</p>
              <p>Research Experience (Stanford)</p>
              <p>Industry Experience (Tesla, Apple, Amazon)</p>
              <p>Berkeley Teaching Assistant & Tutor</p>
              <p>Challenger School Alumni</p>
            </div>
          </div>

          <div className="founder-card">
            <div className="founder-image">
              <img src={anishImage} alt="Anish Saha" />
            </div>
            <h3>Anish Saha</h3>
            <p className="title">Co-Founder & Lead Tutor</p>
            <p className="bio">
              A UC Berkeley graduate in Applied Mathematics and Data Science, with a Master's in Computer Science from UIUC. 
              Anish brings exceptional expertise from his roles as a CS researcher at Berkeley and Stanford, followed by Software Engineering 
              experience at Oracle and Amazon. His academic excellence includes perfect scores in SAT Math, SAT II Math, and GRE examinations, 
              with a top 1.5% score in AMC 12. Throughout his academic career, he served as a Teaching Assistant at both Berkeley and UIUC. 
              His educational journey through Stratford School provides unique insights into Bay Area education.
            </p>
            <div className="credentials">
              <p>UC Berkeley - Applied Math & Data Science</p>
              <p>UIUC - MS in Computer Science (AI Concentration)</p>
              <p>Teaching Assistant at Berkeley & UIUC</p>
              <p>5+ Years Industry Experience (Oracle, Amazon)</p>
              <p>Perfect Scores: SAT Math, SAT II Math, GRE</p>
              <p>Stratford School Alumni</p>
            </div>
          </div>
        </div>
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
