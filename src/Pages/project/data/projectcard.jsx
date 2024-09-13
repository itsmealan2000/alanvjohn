import React from 'react';

const ProjectCard = ({ title, description, imgSrc, link }) => {
  return (
<div className='con'>
      <div className="card bg-auto" >
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank" className="btn btn-primary">Git Link</a>
        </div>
      </div>
</div>
  );
};

export default ProjectCard;
