import React from 'react';
import './TrendingPreview.css';
import '../../routes/App.css';
import { useNavigate } from 'react-router-dom';

function TrendingPreview({ trendingMovies, render }) {
  const navigate = useNavigate();

  return (
    <section id='trendingPreview' className='trendingPreview-container'>
      <div className='trendingPreview-header'>
        <h2 className='trendingPreview-title'>Tendencias</h2>
        <button
          onClick={() => navigate(
            '/trending',
            {
              state: { trendingMovies }
            }
          )}
          className='trendingPreview-btn'>
            Ver más
        </button>
      </div>

      <article className='trendingPreview-movieList'>
        {trendingMovies.map(render)}
      </article>
      
    </section>
  );
}

export { TrendingPreview };