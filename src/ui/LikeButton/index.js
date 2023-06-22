import React from 'react';

function LikeButton() {
  const [isLike, setIsLike] = React.useState(false);

  const handleLikeClick = e => {
    setIsLike(!isLike);
    e.stopPropagation();
  };

  return {
    isLike,
    handleLikeClick,
  };
}

export { LikeButton };