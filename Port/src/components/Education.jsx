import React from 'react';
import './Education.css';

const Education = () => (
  <section className="education-section animated-section">
    <h2>Education</h2>
    <div className="education-row">
      <div className="education-item">
        <span className="degree">MTech CSE</span>
        <span className="school">Ramaiah Institute Of Technology</span>
        <span className="year">2024-2026</span>
      </div>
      <div className="education-item">
        <span className="degree">B.E CSE - Data Science</span>
        <span className="school">MVJ College Of Engineering</span>
        <span className="year">2020-2024</span>
        <span className="cgpa">(Cgpa: 8.95)</span>
      </div>
    </div>
  </section>
);

export default Education;
