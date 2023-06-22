import React from 'react';
import './FavoriteMovies.css';
import '../../routes/App.css';
import { LikeButton } from '../LikeButton';

function FavoriteMovies({
  error,
  loading,
  onLoading,
}) {

  return (
    <section className='favoriteMovies'>
      <div className='favoriteMovies-header'>
        <h2 className='favoriteMovies-title'>Favorite Movies</h2>

        <button type="button" className='seeMoreFavoriteMovies-btn'>
          See more
        </button>
      </div>

      <article className='favoriteMovies-movieList'>
        {error && <p>Ha ocurrido un error: {error}</p>}

        {loading && onLoading()}

        {/* {(!error && !loading) && favoriteMovies.map(render)} */}

        <div
          className='movie-container'>
          <img
            src={`https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg`}
            className='movie-img animation'
            loading='lazy'
          />
          <LikeButton />
        </div>

        <div
          className='movie-container'>
          <img
            src={`https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg`}
            className='movie-img animation'
            loading='lazy'
          />
          <LikeButton />
        </div>

        <div
          className='movie-container'>
          <img
            src={`https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg`}
            className='movie-img animation'
            loading='lazy'
          />
          <LikeButton />
        </div>
      </article>
    </section>
  );
}

export { FavoriteMovies };