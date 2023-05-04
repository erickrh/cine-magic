import React from 'react';
import '../../routes/App.css';
import '../TrendingPreview/TrendingPreview.css';
import { useNavigate } from 'react-router-dom';

function MovieList({ id, title, image }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/details/${id}`)}
        className='movie-container'>
        <img
          src=''
          data-src={`https://image.tmdb.org/t/p/w300/${image}`}
          className='movie-img'
          alt={title}
          loading='lazy'
        />
      </div>
    </>
  );
}

export { MovieList };