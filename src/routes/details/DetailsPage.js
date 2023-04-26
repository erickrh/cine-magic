import React from 'react';
import './DetailsPage.css';
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);

  const backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%), url("https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg")';

  return (
    <>
      <header style={{backgroundImage: backgroundImage}} className='moviePoster'></header>

      <section id="movieDetail" className="movieDetail-container">
        <h1 className="movieDetail-title">Deadpool</h1>
        <span className="movieDetail-score">7.6</span>
        <p className="movieDetail-description">
      Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boys life.
        </p>

        <article className="categories-list">
          <div className="category-container">
            <h3 id="id28" className="category-title">Romance</h3>
          </div>

          <div className="category-container">
            <h3 id="id16" className="category-title">Drama</h3>
          </div>

          <div className="category-container">
            <h3 id="id14" className="category-title">Acción</h3>
          </div>
        </article>

        <article className="relatedMovies-container">
          <h2 className="relatedMovies-title">Películas similares</h2>

          <div className="relatedMovies-scrollContainer">
            <div className="movie-container">
              <img
                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                className="movie-img"
                alt="Nombre de la película"
              />
            </div>
        
            <div className="movie-container">
              <img
                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                className="movie-img"
                alt="Nombre de la película"
              />
            </div>
        
            <div className="movie-container">
              <img
                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                className="movie-img"
                alt="Nombre de la película"
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export { DetailsPage };