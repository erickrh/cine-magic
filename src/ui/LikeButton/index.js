import React from 'react';

function LikeButton() {
  const [isLike, setIsLike] = React.useState(false);

  const handleLikeClick = e => {
    setIsLike(!isLike);
    e.stopPropagation();
  };

  return (
    <button onClick={handleLikeClick} type="button" className={isLike ? 'like-btn like-btn--liked' : 'like-btn'}></button>
  );
}

export { LikeButton };