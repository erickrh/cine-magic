import React from 'react';
import './TrendingPreview.css';
import '../../routes/App.css';
import { useNavigate } from 'react-router-dom';

function TrendingPreview({
  loading,
  error,
  trendingMovies,
  render,
  onLoading,
}) {
  const navigate = useNavigate();
  const observerRef = React.useRef(null);
  
  React.useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target.querySelector('img');
          img.src = img.dataset.src;
          console.log(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '-30px',
    });

    const images = document.querySelectorAll('.movie-container');
    images.forEach(img => observerRef.current.observe(img));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [trendingMovies]);

  return (
    <section id='trendingPreview' className='trendingPreview-container'>
      <div className='trendingPreview-header'>
        <h2 className='trendingPreview-title'>Trends</h2>
        <button
          onClick={() => navigate(
            '/trending',
            {
              state: { trendingMovies }
            }
          )}
          className='trendingPreview-btn'>
            See more
        </button>
      </div>

      <article className='trendingPreview-movieList'>
        {error && <p>Ha ocurrido un error: {error}</p>}

        {loading && onLoading()}

        {(!error && !loading) && trendingMovies.map(render)}
      </article>
      
    </section>
  );
}

export { TrendingPreview };