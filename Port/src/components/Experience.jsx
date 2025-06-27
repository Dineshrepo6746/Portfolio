import React from 'react';
import './Experience.css';

const Experience = () => (
  <section className="experience-section animated-section">
    <h2>Experience</h2>
    <div className="experience-row">
      <div className="experience-col">
        <div className="experience-card">
          <h3>AWS Intern</h3>
          <span className="company">Quridge Global Solutions Pvt Ltd, Bengaluru</span>
          <span className="date">Nov 2023 - May 2024</span>
          <ul>
            <li>Leveraged Ansible and YAML scripting to streamline AWS resource provisioning, shrinking deployment times by 4 hours per instance and bolstering infrastructure scalability by 20%.</li>
            <li>Configured Linux-based infrastructure for secure user and group management. Developed Ansible Playbooks for automated deployments and S3 bucket management.</li>
          </ul>
        </div>
      </div>
      <div className="experience-col">
        <div className="experience-card">
          <h3>Data Visualization Intern</h3>
          <span className="company">Renault Nissan Automotive India Pvt Ltd, Chennai</span>
          <span className="date">July 2023 - Aug 2023</span>
          <ul>
            <li>Launched interactive management dashboards using Qlik Sense & Power BI. Implemented KPI tracking and data visualization for business insights.</li>
            <li>Provided IT Help Desk Support, handling ticket assignment & closing. Worked on front-end and FastAPI for real-time data processing.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
