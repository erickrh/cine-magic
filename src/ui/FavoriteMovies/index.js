import React from 'react';
import './FavoriteMovies.css';
import '../../routes/App.css';

function FavoriteMovies({
  error,
  loading,
  onLoading,
  // render,
}) {
  const [isLike, setIsLike] = React.useState(false);

  const handleLikeClick = () => {
    setIsLike(!isLike);
  };

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
          <button onClick={handleLikeClick} type="button" className={isLike ? 'like-btn like-btn--liked' : 'like-btn'}></button>
        </div>

      </article>
    </section>
  );
}

export { FavoriteMovies };