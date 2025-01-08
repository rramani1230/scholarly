import React, { useEffect } from 'react';
import './Schedule.css';

const Schedule = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="schedule-page">
      <div className="schedule-header">
        <h1>Schedule a Session</h1>
        <p>Choose a time that works best for you</p>
      </div>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/scholarly__"
        style={{ minWidth: '320px', height: '750px' }} 
      />
    </div>
  );
};

export default Schedule;
