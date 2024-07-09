import React from 'react'
import './contact.css'
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function contact() {
  return (
    <div className='maincontact container-fluid'>
      <div className='contact container d-flex flex-column flex-wrap justify-content-center mt-5 pt-5'>
        <h1 className='contactheading'>Contact Me</h1>
        <p>For any queries or suggestions, feel free to contact Me.</p>
        <div className='contact-logo container d-flex flex-row'>
        {/* email */}
        <div className='email'>
          <p>
            <a href='mailto:alanjohn9626@gmail.com'>
            <MdAttachEmail className='email-logo'/>
            </a>
          </p>
          </div>
        {/*git*/}
        <div className='git ms-4'>
          <p>
            <a href='https://github.com/itsmealan2000'>
            <FaGithub className='github-logo' />
            </a>
          </p>
        </div>
        </div>
        <form className='form-group'>
          <input type='text' placeholder='Enter your name'  className='form-control m-2'/>
          <input type='email' placeholder='Enter your email' className='form-control m-2'/>
          <textarea placeholder='Enter your message'className='form-control m-2'></textarea>
          <div className='buttons container-fluid'>
            <button type='submit' className='btn btn-primary mt-3'>Send Message</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default contact

// <p>Email :  &nbsp;
// <a href='mailto:alanjohn9626@gmail.com'>
// alanjohn9626@gmail.com
// </a>
// </p>
// <p>GitHub : &nbsp; 
// <a href='https://github.com/itsmealan2000'>
// itsmealan2000</a>
// </p>