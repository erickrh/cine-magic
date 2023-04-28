import React from 'react';
import './DetailsPage.css';
import { useParams } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { CategoriesPreviewList } from '../../ui/CategoriesPreviewList';

function DetailsPage() {
  const { movieId } = useParams();
  
  const { movieDetails, getMovieDetails } = useMovieAPI();
  React.useEffect(() => {
    getMovieDetails(movieId);
    window.scrollTo(0, 0);
  }, []);

  const backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%), url(https://image.tmdb.org/t/p/w500${movieDetails.poster_path})`;

  return (
    <>
      {movieDetails.poster_path && (
        <header style={{backgroundImage: backgroundImage}} className='moviePoster'></header>
      )}

      <section id="movieDetail" className="movieDetail-container">
        <h1 className="movieDetail-title">{movieDetails.original_title}</h1>
        <span className="movieDetail-score">{movieDetails.vote_average}</span>
        <p className="movieDetail-description">{movieDetails.overview}</p>

        {movieDetails.genres && (
          <CategoriesPreviewList genres={movieDetails.genres} />
        )}

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