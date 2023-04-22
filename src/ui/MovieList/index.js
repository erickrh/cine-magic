import React from 'react';
import '../../routes/App.css';
import '../TrendingPreview/TrendingPreview.css';

function MovieList({ title, image }) {
  return (
    <>
      <div className='movie-container'>
        <img
          src={`https://image.tmdb.org/t/p/w300/${image}`}
          className='movie-img'
          alt={title}
        />
      </div>
    </>
  );
}

export { MovieList };