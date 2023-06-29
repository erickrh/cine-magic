import React from 'react';
import { LikeButton } from '../LikeButton';
import { useNavigate } from 'react-router-dom';

function FavoriteMovieList({ id, title, movie, image }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/details/${id}`)}
        className='movie-container'>
        <img
          src={`https://image.tmdb.org/t/p/w300/${image}`}
          className='movie-img'
          alt={title}
          loading='lazy'
        />
        <LikeButton movie={movie} />
      </div>
    </>
  );
}

export { FavoriteMovieList };