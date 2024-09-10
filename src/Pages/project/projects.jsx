import React,{useRef} from 'react'
import './project.css'
import ProjectCard from './data/projectcard'; // Import the card component
import projectData from './data/projectdata'; // Import the dynamic data

const projects = () => {
  const projectRef = useRef(null)

  return (
    <>
    <div data-scroll-container ref={projectRef}>
    <div className="project-holder" data-scroll-section>
    <div data-scroll  data-scroll-speed="2">
          <h1 className='projectheading'>
            Projects
          </h1>
      <div className='cardgen' data-scroll  data-scroll-speed="2" >
                        {projectData.map((project) => (
                              <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgSrc={project.imgSrc}
                                link={project.link}
                              />
                            ))}
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default projects