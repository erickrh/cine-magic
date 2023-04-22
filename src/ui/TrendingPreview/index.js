import React from 'react';
import './TrendingPreview.css';
import '../../routes/App.css';

function TrendingPreview() {
  return (
    <section id='trendingPreview' className='trendingPreview-container'>
      <div className='trendingPreview-header'>
        <h2 className='trendingPreview-title'>Tendencias</h2>
        <button className='trendingPreview-btn'>Ver más</button>
      </div>

      <article className='trendingPreview-movieList'>
        <div className='movie-container'>
          <img
            src='https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg'
            className='movie-img'
            alt='Nombre de la película'
          />
        </div>

        <div className='movie-container'>
          <img
            src='https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg'
            className='movie-img'
            alt='Nombre de la película'
          />
        </div>

        <div className='movie-container'>
          <img
            src='https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg'
            className='movie-img'
            alt='Nombre de la película'
          />
        </div>
      </article>
    </section>
  );
}

export { TrendingPreview };