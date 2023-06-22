import React from 'react';
import '../../routes/App.css';
import '../TrendingPreview/TrendingPreview.css';
import { useNavigate } from 'react-router-dom';

function MovieList({
  id,
  title,
  image,
  isLike,
  handleLikeClick,
}) {
  const navigate = useNavigate();
  const observerRef = React.useRef(null);
  const imagesMovies = React.useRef(null);
  
  React.useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('animation');
          observer.unobserve(entry.target);
        }
      });
    }, {
      // rootMargin: '-30px',
    });

    observerRef.current.observe(imagesMovies.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      <div
        onClick={() => navigate(`/details/${id}`)}
        className='movie-container'>
        <img
          ref={imagesMovies}
          src=''
          data-src={`https://image.tmdb.org/t/p/w300/${image}`}
          className='movie-img'
          alt={title}
          loading='lazy'
        />
        <button onClick={e => handleLikeClick(e)} type="button" className={isLike ? 'like-btn like-btn--liked' : 'like-btn'}></button>
      </div>
    </>
  );
}

export { MovieList };