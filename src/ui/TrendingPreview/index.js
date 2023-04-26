import React from 'react';
import './TrendingPreview.css';
import '../../routes/App.css';
import { useNavigate } from 'react-router-dom';

function TrendingPreview({ loading, error, trendingMovies, render }) {
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
        {error && <p>Ha ocurrido un error: {error}</p>}

        {loading && <p>Cargando...</p>}

        {(!error && !loading) && trendingMovies.map(render)}
      </article>
      
    </section>
  );
}

export { TrendingPreview };