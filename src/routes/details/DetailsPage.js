import React from 'react';
import './DetailsPage.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { CategoriesPreviewList } from '../../ui/CategoriesPreviewList';

function DetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const {
    movieDetails,
    similarMovies,
    getMovieDetails,
    getSimilarMovies
  } = useMovieAPI();

  React.useEffect(() => {
    getMovieDetails(movieId);
    getSimilarMovies(movieId);
    window.scrollTo(0, 0);
  }, [movieId]);

  const backgroundImage = `
    linear-gradient(rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%),
    url(https://image.tmdb.org/t/p/w500${movieDetails.poster_path})
  `;

  return (
    <>
      {movieDetails.poster_path && (
        <header
          style={{ backgroundImage: backgroundImage }}
          className='moviePoster'
        ></header>
      )}

      <section id='movieDetail' className='movieDetail-container'>
        <h1 className='movieDetail-title'>{movieDetails.original_title}</h1>
        <span className='movieDetail-score'>{movieDetails.vote_average}</span>
        <p className='movieDetail-description'>{movieDetails.overview}</p>

        {movieDetails.genres && (
          <CategoriesPreviewList genres={movieDetails.genres} />
        )}

        <article className='relatedMovies-container'>
          <h2 className='relatedMovies-title'>Similar movies</h2>

          <div className='relatedMovies-scrollContainer'>
            {similarMovies.map(movie => {
              if (movie.poster_path) {
                return (
                  <div
                    key={movie.id}
                    className='movie-container'
                    onClick={() => navigate(`/details/${movie.id}`)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      className='movie-img'
                      alt='Movie name'
                    />
                  </div>
                );
              }
            })}
          </div>
        </article>
      </section>
    </>
  );
}

export { DetailsPage };