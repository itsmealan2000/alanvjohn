//pages
import Home from './home/home'
import About from './abtloader/about/about'
import Skill from './abtloader/Skills/skills'
import Contact from './contact/contact'
import Projects from './project/projects'

//componet 
import Marquee from '../Components/marquee/marquee';
//gsap
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);
import React from 'react'

function pageloader() {
  return (
    <>
    <section className='section1' ><Home/></section>
    <section className='section2' ><About/></section>
    <section className="section3" ><Marquee/> </section>
    <section className='section3' ><Skill/></section>
    <section className='section4' ><Projects/></section>
    <section className='section5' ><Contact/></section>
    </>
  )
}

export default pageloader