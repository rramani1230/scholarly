import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Unlock Your Full Potential</h1>
          <p>Expert tutoring in Math, English, Computer Science, and more</p>
          <Link to="/contact" className="cta-button">Get Started</Link>
        </div>
      </section>

      <section className="subjects">
        <h2>Our Subjects</h2>
        <div className="subjects-grid">
          <div className="subject-card">
            <h3>Mathematics</h3>
            <p>From algebra to calculus, we've got you covered</p>
          </div>
          <div className="subject-card">
            <h3>English</h3>
            <p>Literature, writing, and language arts</p>
          </div>
          <div className="subject-card">
            <h3>Computer Science</h3>
            <p>Programming, algorithms, and web development</p>
          </div>
          <div className="subject-card">
            <h3>General Subjects</h3>
            <p>Science, history, and more</p>
          </div>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Experienced Tutors</h3>
            <p>Our tutors are experts in their fields with proven track records</p>
          </div>
          <div className="feature">
            <h3>Personalized Approach</h3>
            <p>Customized learning plans tailored to your needs</p>
          </div>
          <div className="feature">
            <h3>Flexible Schedule</h3>
            <p>Sessions that fit your busy lifestyle</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
