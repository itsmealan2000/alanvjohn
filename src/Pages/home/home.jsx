import React, { useRef, useEffect } from 'react';
import './home.css';
import Me from '../../assets/home/me.png';
import About from '../about/about';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const { scroll } = useLocomotiveScroll();
  const homeRef = useRef(null);

  useEffect(() => {
    if (scroll && homeRef.current) {          // Locomotive Scroll
      scroll.update();

      gsap.to(                      // GSAP animations 
        ".left",
        { opacity: 50, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".mainhome",
            start: "top 20%", // Adjust as needed
            end: "bottom 90%", // Adjust as needed
            scrub: true,
            pin:true,
            markers: false // Remove in production
          }
        }
      );
    }
  }, [scroll]);

  return (
    <div className="mainhome container-fluid" data-scroll-container ref={homeRef}>
      <div className="row mt-5">
        <div className="col-6 left" data-scroll-section>
          <h1
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
            data-scroll-section
          >
            Hello, I am <br />
            Alan V John
          </h1>
          <p
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="0.9"
            data-scroll-section
          >
            A passionate software engineer based in Kerala. <br />
            I create bespoke software solutions to elevate your online presence and drive success! <br />
            Eager to join a dynamic team and grow while contributing to impactful projects! <br />
          </p>
        </div>
        <div className="col right">
          <img src={Me} alt="Me" className="img-fluid profileimage" />
          <div className="circle"></div>
          <div className="bluecircle">
            <svg xmlns="http://www.w3.org/2000/svg" width="324" height="324" viewBox="0 0 324 324" fill="none">
              <g filter="url(#filter0_f_8_7)">
                <circle cx="162" cy="162" r="120" fill="url(#paint0_radial_8_7)" />
              </g>
              <defs>
                <filter id="filter0_f_8_7" x="0" y="0" width="324" height="324" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="21" result="effect1_foregroundBlur_8_7" />
                </filter>
                <radialGradient id="paint0_radial_8_7" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.1587 49.1405) rotate(44.0741) scale(325.926 521.273)">
                  <stop stopColor="#0038FF" stopOpacity="0.4" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="redcircle">
            <svg xmlns="http://www.w3.org/2000/svg" width="188" height="321" viewBox="0 0 188 321" fill="none">
              <g filter="url(#filter0_f_8_15)">
                <circle cx="160.5" cy="160.5" r="118.5" fill="url(#paint0_radial_8_15)" />
              </g>
              <defs>
                <filter id="filter0_f_8_15" x="0" y="0" width="321" height="321" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="21" result="effect1_foregroundBlur_8_15" />
                </filter>
                <radialGradient id="paint0_radial_8_15" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.1318 49.0512) rotate(44.0741) scale(321.852 514.757)">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="#FF0000" stopOpacity="0.4" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <About/>
    </div>
  );
}

export default Home;
