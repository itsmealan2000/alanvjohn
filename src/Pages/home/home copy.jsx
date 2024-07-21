import React, { useRef, useEffect } from "react";
import "./home.css";
import Me from "../../assets/home/me.png";
import About from "../about/about";
import Contact from "../contact/contact";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  const { scroll } = useLocomotiveScroll();
  const homeRef = useRef(null);

  useEffect(() => {
    if (scroll && homeRef.current) {
      // Locomotive Scroll
      scroll.update();
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1440px)", () => {
        gsap.from(".line-2", {
          scrollTrigger: {
            trigger: ".mainhome",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%",
            markers:true
          },
          scaleX: 0, 
          transformOrigin: "left center", 
          ease: "none"
        });
      });
      mm.add("(max-width: 599px)", () => {
        ScrollTrigger.create({
          trigger: ".left",
        });
      });
    }
  }, [scroll]);

  return (
    <div
      className="mainhome container-fluid"
      ref={homeRef}
    >
      <div className="row mt-5">        
        <div className="col-6 left">
          <h1>
            Hello, I am <br />
            Alan V John
          </h1>
          <p>
            A passionate software engineer based in Kerala. <br />
            I create bespoke software solutions to elevate your online presence
            and drive success! <br />
            Eager to join a dynamic team and grow while contributing to
            impactful projects! <br />
          </p>
        </div>
        <div className="col right">
          <img src={Me} alt="Me" className="img-fluid profileimage w-50 z-1" />
          <div className="circle"></div>
        </div>
        <span class="line line-2"></span>
      </div>
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default Home;
