import React from 'react';
import './TrendingPreview.css';
import '../../routes/App.css';

function TrendingPreview({ trendingMovies, render }) {
  return (
    <section id='trendingPreview' className='trendingPreview-container'>
      <div className='trendingPreview-header'>
        <h2 className='trendingPreview-title'>Tendencias</h2>
        <button className='trendingPreview-btn'>Ver más</button>
      </div>

      <article className='trendingPreview-movieList'>
        {trendingMovies.map(render)}
      </article>
      
    </section>
  );
}

export { TrendingPreview };