import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function LikeButton({ movie }) {
  const [isLike, setIsLike] = React.useState(false);
  const { likeMovie } = useLocalStorage();
  
  const handleLikeClick = e => {
    setIsLike(!isLike);
    likeMovie(movie);
    e.stopPropagation();
  };

  return (
    <button onClick={handleLikeClick} type="button" className={isLike ? 'like-btn like-btn--liked' : 'like-btn'}></button>
  );
}

export { LikeButton };