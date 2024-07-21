import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// Pages
import Home from './Pages/home/home';
import About from './Pages/about/about';
import Project from './Pages/project/projects';
import Contact from './Pages/contact/contact';

// Components
import Navbar from './Components/Navbar/navbar';

// Framer Motion transitions
const pageVariants = {
  initial: { opacity: 0.2 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 1,
};

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
    smoothClass:'has-scroll-smooth',
    scrollbarClass:'c-scrollbar',
    tablet: {
      smooth: true,
    },
    smartphone: {
      smooth: true,
      smoothClass:'has-scroll-smooth',
    },
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
    <Navbar />
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path='/about'
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path='/projects'
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Project />
              </motion.div>
            }
          />
          <Route
            path='/contact'
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;