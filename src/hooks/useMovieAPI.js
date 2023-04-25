import React from 'react';
import axios from 'axios';

function useMovieAPI() {
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Authorization': process.env.REACT_APP_API_TOKEN,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  React.useEffect(() => {
    const getTrendingMoviesPreview = async () => {
      const { data } = await api('trending/movie/day');
      setTrendingMovies(data.results);
    };
    getTrendingMoviesPreview();
  }, []);

  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    const getCategoriesPreview = async () => {
      const { data } = await api('genre/movie/list');
      setGenres(data.genres);
    };
    getCategoriesPreview();
  }, []);

  const [categoryMovies, setCategoryMovies] = React.useState([]);
  const getMoviesByCategory = async id => {
    const { data } = await api('discover/movie', {
      params: {
        with_genres: id,
      },
    });
    setCategoryMovies(data.results);
  };
  
  return {
    trendingMovies,
    genres,
    categoryMovies,
    getMoviesByCategory,
  };
}

export { useMovieAPI };