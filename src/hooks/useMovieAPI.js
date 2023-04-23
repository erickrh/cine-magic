import React from 'react';

function useMovieAPI() {
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  React.useEffect(() => {
    const getTrendingMoviesPreview = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      const movies = data.results;
      setTrendingMovies(movies);
    };
    getTrendingMoviesPreview();
  }, []);

  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    const getCategoriesPreview = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      const genreJSON = data.genres;
      setGenres(genreJSON);
    };
    getCategoriesPreview();
  }, []);

  return {
    trendingMovies,
    genres,
  };
}

export { useMovieAPI };