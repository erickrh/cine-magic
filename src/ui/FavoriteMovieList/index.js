import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LikeButton } from '../LikeButton';

function FavoriteMovieList({
  id,
  title,
  movie,
  image,
  likeMovie,
  getLikedMovies,
}) {
  
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
        
        <LikeButton
          movie={movie}
          likeMovie={likeMovie}
          getLikedMovies={getLikedMovies}
        />
      </div>
    </>
  );
}

export { FavoriteMovieList };