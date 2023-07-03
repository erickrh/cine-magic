import React from 'react';
import './FavoriteMovies.css';
import '../../routes/App.css';
import { useNavigate } from 'react-router-dom';

function FavoriteMovies({
  error,
  loading,
  onLoading,
  render,
  getLikedMovies,
}) {

  const navigate = useNavigate();

  return (
    <section className='favoriteMovies'>
      <div className='favoriteMovies-header'>
        <h2 className='favoriteMovies-title'>Favorite Movies</h2>

        <button onClick={() => navigate('/favorite')} type="button" className='seeMoreFavoriteMovies-btn'>
          See more
        </button>
      </div>

      <article className='favoriteMovies-movieList'>
        {error && <p>Ha ocurrido un error: {error}</p>}

        {loading && onLoading()}

        {getLikedMovies.length < 1 && <p>It looks so empty here.</p>}

        {(!error && !loading) && getLikedMovies.map(render)}
      </article>
    </section>
  );
}

export { FavoriteMovies };