import React,{useRef,useEffect} from 'react'
// assets 
import "./home.css";
import Me from "../../assets/home/me.png";

function home({LocomotiveScrollProvider}) {
  const homeRef = useRef(null);
    // Initialize and check Locomotive Scroll
    useEffect(() => {
      if (homeRef.current) {
        console.log("Locomotive Scroll is working on Home page.");
      } else {
        console.log("Locomotive Scroll reference is missing.");
      }
    
      // Ensure LocomotiveScrollProvider is initialized before destroying
      if (LocomotiveScrollProvider) {
        console.log("Locomotive Scroll is initialized, destroying now.");
        LocomotiveScrollProvider.destroy();
      }
    
      return () => {
        if (LocomotiveScrollProvider) {
          console.log("Destroying Locomotive Scroll");
          LocomotiveScrollProvider.destroy();
        }
      };
    }, [LocomotiveScrollProvider]);
  return (
    <>
            <div id="home" className='' data-scroll-container ref={homeRef}>
              <div className='row homerow container-fluid' data-scroll-section>
                <div className='col-sm-8 col-md-6 left' data-scroll data-scroll-speed="2" >
                  <h1 className='container titlehome'>
                    Hello, I am <br />
                    Alan V.John
                  </h1>
                  <p className='container parahome'> 
                    A passionate software engineer based in Kerala. <br />
                    I create bespoke software solutions to elevate your online presence
                    and drive success! <br />
                    Eager to join a dynamic team and grow while contributing to
                  </p>
                </div>
                <div className='col-12 col-md-6 right' >
                <img src={Me} alt='Profile picture of Alan V John' className='me img-fluid w-75' />
                  <div className="circle"></div>
                </div>
              </div>
            </div>
    </>
  )
}

export default home