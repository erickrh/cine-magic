import React from 'react';

function LikeButton({ movie, likeMovie, getLikedMovies }) {
  const [isLike, setIsLike] = React.useState(false);
    
  const handleLikeClick = e => {
    setIsLike(!isLike);
    likeMovie(movie);
    e.stopPropagation();
  };
  
  React.useEffect(() => {
    const isAlreadyLike = () => {
      const movieIds = getLikedMovies.map(m => m.id);
      if (movieIds.includes(movie.id)) setIsLike(true);
      else setIsLike(false);
    };
    isAlreadyLike();
  }, [getLikedMovies]);

  return (
    <button onClick={handleLikeClick} type="button" className={isLike ? `like-btn like-btn--liked` : 'like-btn'}></button>
  );
}

export { LikeButton };