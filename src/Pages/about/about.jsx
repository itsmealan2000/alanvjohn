import React from 'react'
import './about.css'

function about() {
  return (
    <>
    <div className='aboutmain container-fluid'>
      <div className='aboutrow gx-2 row'>
        <div className='subabout col-8 col-sm-6'>
          <h1 className='heading-myskill'>About Me</h1>
          <p className='container ms-4'>
          A passionate software engineer based in Kerala. <br />
          I create bespoke software solutions elevate your online presence and drive success!. <br /> 
          Eager to join a dynamic team and grow whilecontributing to impactful projects! <br />
          </p>
        </div>
        <div className='mainskills col-4 col-sm-6'>
          <h1 className='heading-myskill'>My Skills</h1>
          <div className='skills'>
            <div className='skill'>
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className='skill'>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default about