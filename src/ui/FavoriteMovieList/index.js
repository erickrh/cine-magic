import React from 'react';
import { useNavigate } from 'react-router-dom';

function FavoriteMovieList({ id, title, movie, image, likeMovie, getLikedMovies }) {
  const navigate = useNavigate();

  const [isLike, setIsLike] = React.useState(false);

  const handleLikeClick = e => {
    likeMovie(movie);
    setIsLike(!isLike);
    e.stopPropagation();
  };
  
  React.useEffect(() => {
    const isAlreadyLike = () => {
      const movieIds = getLikedMovies.map(m => m.id);
      if (movieIds.includes(movie.id)) setIsLike(true);
    };
    isAlreadyLike();
  }, [getLikedMovies]);

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
        <button onClick={handleLikeClick} type="button" className={isLike ? 'like-btn like-btn--liked' : 'like-btn'}></button>
      </div>
    </>
  );
}

export { FavoriteMovieList };