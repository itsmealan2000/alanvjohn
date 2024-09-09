import React, { useRef } from "react";
import "./skills.css";
const Skills = () => {
  const skillRef = useRef(null);
  return (
    <>
    <div data-scroll-container ref={skillRef}>
      <div className="skill-holder" data-scroll-section id="stick">
      <div className="bg-skill">
              <h1 className="header-skills"             
              data-scroll
              data-scroll-speed="5"
              data-scroll-sticky // Attibute that enables the sticky scroll
              data-scroll-target="#stick">Skills</h1>
        </div>
        <div data-scroll
              data-scroll-class="in-view">
                <h6>Flutter</h6>
                <h6>JavaScript</h6>
                <h6>HTML</h6>
                <h6>CSS</h6>
                <h6>React</h6>
                <h6>Vue.js</h6>
                <h6>Node.js</h6>
                <h6>Express</h6>
                <h6>MongoDB</h6>
                <h6>Python</h6>
                <h6>TypeScript</h6>
                <h6>Firebase</h6>
                <h6>PostgreSQL</h6>
                <h6>Docker</h6>
                <h6>Kubernetes</h6>
                <h6>Tailwind CSS</h6>
                <h6>Adobe Photoshop</h6>
                <h6>Canva</h6>
                <h6>Figma</h6>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills