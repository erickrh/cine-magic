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
  language,
  translation,
}) {
  const navigate = useNavigate();

  const langs = {
    trends: translation[language].trends,
    seeMore: translation[language].seeMore,
    error : translation[language].error,
  };

  return (
    <section id='trendingPreview' className='trendingPreview-container'>
      <div className='trendingPreview-header'>
        <h2 className='trendingPreview-title'>{langs.trends}</h2>
        <button
          onClick={() => navigate(
            '/trending',
            {
              state: { trendingMovies }
            }
          )}
          className='trendingPreview-btn'>
          {langs.seeMore}
        </button>
      </div>

      <article className='trendingPreview-movieList'>
        {error && <p>{langs.error}: {error}</p>}

        {loading && onLoading()}

        {(!error && !loading) && trendingMovies.map(render)}
      </article>
      
    </section>
  );
}

export { TrendingPreview };