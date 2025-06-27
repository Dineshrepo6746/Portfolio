import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="skills-section animated-section">
    <h2>Skills</h2>
    <div className="skills-list">
      <div>
        <h4>Programming and Cloud:</h4>
        <span className="skill-badge">Cloud Practitioner</span>
        <span className="skill-badge">Python</span>
        <span className="skill-badge">AWS</span>
        <span className="skill-badge">Ansible</span>
        <span className="skill-badge">Linux Commands</span>
      </div>
      <div>
        <h4>Prompt Engineering:</h4>
        <span className="skill-badge">Chatgpt</span>
        <span className="skill-badge">Gemini</span>
        <span className="skill-badge">Claude</span>
        <span className="skill-badge">Perplexity</span>
      </div>
    </div>
  </section>
);

export default Skills;
