import React from 'react';
import './TopContainer.css';
import { useNavigate } from 'react-router-dom';

function TopContainer(props) {
  const navigate = useNavigate();
  
  return (
    <div className='header-container'>
      <span
        onClick={() => navigate(-1)}
        className='header-arrow'>
          &lt;
      </span>
      <h1 className='header-title header-title--categoryView'>
        {props.title}
      </h1>
    </div>
  );
}

export { TopContainer };