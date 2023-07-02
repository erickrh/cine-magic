import React from 'react';
import './FavoriteMovies.css';
import '../../routes/App.css';

function FavoriteMovies({
  error,
  loading,
  onLoading,
  render,
  getLikedMovies,
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

        {(!error && !loading) && getLikedMovies.map(render)}
      </article>
    </section>
  );
}

export { FavoriteMovies };