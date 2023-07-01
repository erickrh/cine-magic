import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function LikeButton({ movie }) {
  const [isLike, setIsLike] = React.useState(false);
  const { likeMovie, getLikedMovies, setSync } = useLocalStorage();
  
  const handleLikeClick = e => {
    setIsLike(!isLike);
    likeMovie(movie);
    setSync(prevState => !prevState);
    e.stopPropagation();
  };

  React.useEffect(() => {
    const isAlreadyLike = () => {
      const likedMovies = getLikedMovies();
      const movieIds = likedMovies.map(movie => movie.id);
      if (movieIds.includes(movie.id)) setIsLike(true);
    };
    isAlreadyLike();
  }, []);

  return (
    <button onClick={handleLikeClick} type="button" className={isLike ? 'like-btn like-btn--liked' : 'like-btn'}></button>
  );
}

export { LikeButton };