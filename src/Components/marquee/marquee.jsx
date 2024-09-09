import React,{useEffect , useRef ,useState} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { debounce } from 'lodash';

import "./marquee.css"
import {
    FaJs,
    FaReact,
    FaVuejs,
    FaPython,
    FaFigma,
    FaNode,
  } from "react-icons/fa";
  import {
    SiFlutter,
    SiDart,
    SiMongodb,
    SiHive,
    SiAdobephotoshop,
    SiCanva,
  } from "react-icons/si";
  import {
    SiNextdotjs,
    SiExpress,
    SiTailwindcss,
    SiFirebase,
    SiPostgresql,
    SiDocker,
    SiKubernetes,
    SiRedux,
    SiTypescript,
  } from "react-icons/si";
  import { TiHtml5 } from "react-icons/ti";
  gsap.registerPlugin(ScrollTrigger);
const marquee = () => {
    const startRef = useRef(null)
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const marqueeInnerRef = useRef(null);
    const tweenRef = useRef(null); 
    const currentScrollRef = useRef(0); 
    const locoScrollRef = useRef(null);
    const lastListItemRef= useRef(null);
  
  
  
    useEffect(() => {
      // GSAP Animation
      tweenRef.current = gsap
        .to(".marquee__part", {
          xPercent: -1265,
          yoyo: true,
          ease: "slow(0.1,0.1,true)",
          repeat: -1,
          duration: 5,
        })
        .totalProgress(0.5);
  
      gsap.set(marqueeInnerRef.current, { xPercent: 0 });
  
      const handleScroll = debounce(() => {
        const newScroll = window.pageYOffset;
        if (newScroll > currentScrollRef.current) {
          setIsScrollingDown(true);
          gsap.to(tweenRef.current, { timeScale: 1 });
        } else {
          setIsScrollingDown(false);
          gsap.to(tweenRef.current, { timeScale: -1 });
        }
  
        currentScrollRef.current = newScroll;
      }, 150);
  
      window.addEventListener("scroll", handleScroll);
  
    }, []);
  return (
    <>
          <section className="marquee" data-scroll-section data-scroll-direction="horizontal">
        <div className="marquee__inner" ref={marqueeInnerRef}>
          <div className="marquee__part">
            <TiHtml5 className="skill-icon" />
          </div>
          <div className="marquee__part">
            <FaJs className="skill-icon" />
          </div>
          <div className="marquee__part">
            <FaReact className="skill-icon" />
          </div>
          <div className="marquee__part">
            <FaVuejs className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiFlutter className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiDart className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiMongodb className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiHive className="skill-icon" />
          </div>
          <div className="marquee__part">
            <FaPython className="skill-icon" />
          </div>
          <div className="marquee__part">
            <FaFigma className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiCanva className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiAdobephotoshop className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiNextdotjs className="skill-icon" />
          </div>
          <div className="marquee__part">
            <FaNode className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiExpress className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiTailwindcss className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiFirebase className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiPostgresql className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiDocker className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiKubernetes className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiRedux className="skill-icon" />
          </div>
          <div className="marquee__part">
            <SiTypescript className="skill-icon" />
          </div>
        </div>
      </section>
    </>
  )
}

export default marquee