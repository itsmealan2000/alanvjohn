import React from 'react';
import './loader.css'; // Create a CSS file for loader styles

const Loader = () => {
  return (
    <div className="loader">
      {/* You can use an SVG or a CSS spinner */}
      <div class="custom-loader"></div>
    </div>
  );
};

export default Loader;
