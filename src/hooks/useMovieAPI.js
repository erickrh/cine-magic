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

  return {
    trendingMovies,
  };
}

export { useMovieAPI };