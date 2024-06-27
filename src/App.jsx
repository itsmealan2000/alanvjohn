import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { motion } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

//pages
import Home from './Pages/home/home'
import About from './Pages/about/about'
import Project from './Pages/project/projects'
import Contact from './Pages/contact/contact'
//componets
import Navbar from './Components/Navbar/navbar'
import Footer from './Components/Footer/footer'

// Framer Motion transitions
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 0.5,
};

function App() {
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.07,
          multiplier: 1.5,
          class: 'is-reveal',
          scrollFromAnywhere: true,
          touchMultiplier: 2.5,
          tablet: {
            smooth: true,
          },
          smartphone: {
            smooth: true,
          },
        }}
      >
    <Navbar/>
    <Routes>
      <Route path='/' element={
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Home />
      </motion.div>
      } />
      <Route path='/about' element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          } />
      <Route path='/projects' element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Project />
            </motion.div>
          } />
      <Route path='/contact' element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }/>
    </Routes>
    </LocomotiveScrollProvider>
    </>
  )
}

export default App