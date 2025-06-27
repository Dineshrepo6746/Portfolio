import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Automated Cloud-Based Audio Harassment Detection',
    highlights: [
      'Cloud-Based Audio Retrieval: Developed an AWS Lambda function to fetch and process new audio files from an AWS S3 bucket automatically. Utilized OpenAI’s Whisper AI for accurate speech transcription, handling various accents and noise levels.',
      'Text Classification: Implemented a fine-tuned DistilBERT model to classify transcribed text as harassment or non-harassment with confidence scores. Integrated automated alerts and content moderation strategies based on classification results.'
    ],
    tech: ['AWS Lambda', 'S3', 'OpenAI Whisper', 'DistilBERT', 'Python', 'Automation'],
    year: '2024',
    color: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
  },
  {
    title: 'Few-Shot Learning for Medical Image Classification (Skin Cancer Detection)',
    highlights: [
      'Implemented a few-shot skin cancer classification system using CLIP and Vision Transformers (ViT). Extracted image features via a ViT-based encoder and computed text embeddings using CLIP’s text encoder.',
      'Computed cosine similarity between image features and text embeddings for classification. Enhanced performance using few-shot learning techniques to improve model adaptation.'
    ],
    tech: ['CLIP', 'ViT', 'Few-Shot Learning', 'Python', 'Medical AI'],
    year: '2023',
    color: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
  }
];

const Projects = () => (
  <section className="projects-section animated-section fullscreen-section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid no-side-padding align-center">
      {projects.map((project, idx) => (
        <div
          className="project-card pro-card"
          key={project.title}
          style={{ background: project.color, animationDelay: `${0.2 + idx * 0.1}s` }}
        >
          <div className="project-header">
            <h3>{project.title}</h3>
            <span className="project-year">{project.year}</span>
          </div>
          <ul className="project-highlights">
            {project.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span className="tech-badge" key={t}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
