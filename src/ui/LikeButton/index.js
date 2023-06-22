import React from 'react';

function LikeButton() {
  const [isLike, setIsLike] = React.useState(false);

  const handleLikeClick = () => {
    setIsLike(!isLike);
  };

  return {
    isLike,
    handleLikeClick,
  };
}

export { LikeButton };