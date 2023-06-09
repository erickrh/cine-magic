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
  nodesLanguage,
}) {

  const navigate = useNavigate();

  return (
    <section className='favoriteMovies'>
      <div className='favoriteMovies-header'>
        <h2 className='favoriteMovies-title'>{nodesLanguage.favoriteMovies}</h2>

        <button onClick={() => navigate('/favorite')} type="button" className='seeMoreFavoriteMovies-btn'>
          {nodesLanguage.seeMore}
        </button>
      </div>

      <article className='favoriteMovies-movieList'>
        {error && <p>{nodesLanguage.error}: {error}</p>}

        {loading && onLoading()}

        {getLikedMovies.length < 1 && <p>{nodesLanguage.emptyMovies}</p>}

        {(!error && !loading) && getLikedMovies.map(render)}
      </article>
    </section>
  );
}

export { FavoriteMovies };