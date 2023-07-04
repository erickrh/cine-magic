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
  nodesLanguage,
}) {
  const navigate = useNavigate();

  return (
    <section id='trendingPreview' className='trendingPreview-container'>
      <div className='trendingPreview-header'>
        <h2 className='trendingPreview-title'>{nodesLanguage.trends}</h2>
        <button
          onClick={() => navigate(
            '/trending',
            {
              state: { trendingMovies }
            }
          )}
          className='trendingPreview-btn'>
          {nodesLanguage.seeMore}
        </button>
      </div>

      <article className='trendingPreview-movieList'>
        {error && <p>{nodesLanguage.error}: {error}</p>}

        {loading && onLoading()}

        {(!error && !loading) && trendingMovies.map(render)}
      </article>
      
    </section>
  );
}

export { TrendingPreview };