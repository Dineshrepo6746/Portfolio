import React from 'react';
import './App.css';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="portfolio-root">
      <header className="portfolio-header">
        <div className="profile-title">
          <h1>DINESH P</h1>
          <div className="profile-links">
            <a
              href="https://github.com/Dineshrepo6746"
              className="icon-link github"
              title="Github"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            />
            <a
              href="https://www.linkedin.com/in/dinesh-palani-614228236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="icon-link linkedin"
              title="Linkedin"
              aria-label="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            />
            <a
              href="mailto:dineshdp6746@gmail.com"
              className="icon-link gmail"
              title="Gmail"
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </header>
      <main>
        <div className="exp-edu-row">
          <Experience />
          <Education />
        </div>
        <Skills />
        <Projects />
      </main>
      <footer className="portfolio-footer">
        <span>© {new Date().getFullYear()} Dinesh P</span>
      </footer>
    </div>
  );
}

export default App;
