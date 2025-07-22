import React, { useRef } from 'react';
import './project.css';
import projectData from './data/projectdata';

const Projects = () => {
  const projectRef = useRef(null);

  return (
    <div className='project-page'>
      <div className="project-container" data-scroll-container ref={projectRef}>
        <section className="project-section" data-scroll-section>
          <h1 className="project-title" data-scroll data-scroll-speed="2">Projects</h1>
          <div className="project-list">
            {projectData.map((project) => (
              <div key={project.id} className="project-row" data-scroll data-scroll-speed="1">
                <div className="project-text">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Project →
                    </a>
                  )}
                </div>
                {project.imgSrc && (
                  <div className="project-img">
                    <img src={project.imgSrc} alt={project.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
