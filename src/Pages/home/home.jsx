import React,{useRef} from 'react'
// assets 
import "./home.css";
import Me from "../../assets/home/me.png";
//otherpages
import About from '../about/about'
import Contact from '../contact/contact'

//componets
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function home() {
  const homeRef = useRef(null);
  return (
    <>
    {/* homepage */}
    <div id="home" className='viewhome container-fluid' data-scroll-container  ref={homeRef}>
      <div className='row' >
        <div className='col-sm-8 col-md-6 left'>
          <h1 className='container'>
            Hello, I am <br />
            Alan V John
          </h1>
          <p className='container'> 
            A passionate software engineer based in Kerala. <br />
            I create bespoke software solutions to elevate your online presence
            and drive success! <br />
            Eager to join a dynamic team and grow while contributing to
          </p>
        </div>
        <div className='col-12 col-md-6 right'>
          <img src={Me} alt='profileimage' className='me img-fluid w-75' />
          <div className="circle"></div>
        </div>
      </div>
    </div>
    {/* otherpages */}
      <About/>
    <Contact/>
    </>
  )
}

export default home