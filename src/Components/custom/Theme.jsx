import React, { createContext, useState, useEffect } from 'react';
import Loader from '../loader/loader'; // Ensure the path to Loader is correct

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(false);

  const applyTheme = (newTheme) => {
    setIsLoading(true); // Show loader
    setTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    console.log(`Theme applied: ${newTheme}`);

    // Simulate a delay to show the loader
    setTimeout(() => {
      setIsLoading(false); // Hide loader
    }, 500); // Adjust delay as needed
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      const initialTheme = prefersDarkScheme.matches ? 'dark' : 'light';
      applyTheme(initialTheme);

      // Listen for system theme changes
      const handleThemeChange = (e) => {
        applyTheme(e.matches ? 'dark' : 'light');
      };

      prefersDarkScheme.addEventListener('change', handleThemeChange);

      // Cleanup listener on component unmount
      return () => {
        prefersDarkScheme.removeEventListener('change', handleThemeChange);
      };
    }
  }, []); // Empty dependency array

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isLoading && <Loader />} {/* Show loader if loading */}
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
