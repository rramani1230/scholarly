import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>
            <span className="gradient-text typing-animation">Scholarly</span>
            <span className="subtitle">Excellence in Education</span>
          </h1>
          <p>Expert tutoring in Mathematics and Computer Science from Berkeley graduates</p>
          <Link to="/contact" className="cta-button">Get Started Today</Link>
        </div>
      </section>

      <section className="subjects">
        <h2>Our Focus Areas</h2>
        <div className="subjects-grid">
          <div className="subject-card">
            <div className="subject-icon math-icon">∑</div>
            <h3>Mathematics</h3>
            <ul>
             <li>Algebra & Geometry</li>
              <li>Calculus (AP, College)</li>
              <li>Statistics & Probability</li>
              <li>SAT/ACT/AMC Math Prep</li>
            </ul>
          </div>
          <div className="subject-card">
            <div className="subject-icon cs-icon">&lt;/&gt;</div>
            <h3>Computer Science</h3>
            <ul>
              <li>Programming (Python, Java)</li>
              <li>Data Structures & Algorithms</li>
              <li>Web Development</li>
              <li>AI & Machine Learning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="section-header">
          <h2>Why Choose Us?</h2>
          <p>Experience the Scholarly difference</p>
        </div>
        <div className="features-grid">
          <Link to="/about" className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Expert Tutors</h3>
            <p>Berkeley graduates with years of teaching experience and industry expertise</p>
          </Link>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Tailored Learning</h3>
            <p>Customized curriculum and teaching methods adapted to your learning style</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Proven Results</h3>
            <p>Track record of improving grades and building a lasting foundation</p>
          </div>
          <Link to="/contact" className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Flexible Scheduling</h3>
            <p>Convenient online and in-person sessions that fit your busy schedule</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
