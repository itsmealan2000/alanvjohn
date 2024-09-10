import React,{useEffect, useRef} from "react";
import './contact.css'
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function contact({LocomotiveScrollProvider}) {
  const contactRef = useRef(null)
  // Initialize and check Locomotive Scroll
  useEffect(() => {
    if (contactRef.current) {
      console.log("Locomotive Scroll is working on Contact page.");
    } else {
      console.log("Locomotive Scroll reference is missing.");
    }

    // Clean up when component unmounts
    return () => {
      if (LocomotiveScrollProvider) {
        console.log("Destroying Locomotive Scroll");
        LocomotiveScrollProvider.destroy();
      }
    };
  }, [LocomotiveScrollProvider]);
  return (
    <>
<div className="contactpage">
      <div className='maincontact container-fluid' data-scroll-container ref={contactRef}>
        <div className='contact container d-flex flex-column flex-wrap justify-content-center' data-scroll-section>
          <h1 className='contactheading' data-scroll data-scroll-delay=".1" data-scroll-class="in-view">Contact Me</h1>
          <p data-scroll data-scroll-class="in-view">For any queries or suggestions, feel free to contact Me.</p>
          <div className='contact-logo container d-flex flex-row' data-scroll >
            {/* email */}
            <div className='email' data-scroll data-scroll-class="in-view">
              <p>
                <a href='mailto:alanjohn9626@gmail.com'>
                  <MdAttachEmail className='email-logo'/>
                </a>
              </p>
            </div>
            {/* git */}
            <div className='git ms-4' data-scroll data-scroll-class="in-view">
              <p>
                <a href='https://github.com/itsmealan2000' target="_blank">
                  <FaGithub className='github-logo' />
                </a>
              </p>
            </div>
          </div>
          <form className='form-group' data-scroll data-scroll-class="in-view">
            <input type='text' placeholder='Enter your name' className='form-control m-2' data-scroll data-scroll-speed="1"/>
            <input type='email' placeholder='Enter your email' className='form-control m-2' data-scroll data-scroll-speed="1"/>
            <textarea placeholder='Enter your message' className='form-control m-2' data-scroll data-scroll-speed="1"></textarea>
            <div className='buttons container-fluid' data-scroll data-scroll-class="in-view">
              <button type='submit' className='btn btn-primary mt-3'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
</div>
    </>
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