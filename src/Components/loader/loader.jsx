import React from 'react';
import './loader.css'; // Create a CSS file for loader styles

const Loader = () => {
  return (
    <div className="loader">
      {/* You can use an SVG or a CSS spinner */}
      <div className="custom-loader"></div>
    </div>
  );
};

export default Loader;
