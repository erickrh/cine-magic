import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function LikeButton({ movie }) {
  const [isLike, setIsLike] = React.useState(false);
  const {
    likeMovie,
    getLikedMovies,
  } = useLocalStorage();
  
  const handleLikeClick = e => {
    setIsLike(!isLike);
    likeMovie(movie);
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
    <button onClick={handleLikeClick} type="button" className={isLike ? 'like-btn like-btn--liked' : 'like-btn'}></button>
  );
}

export { LikeButton };