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
  
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  React.useEffect(() => {
    const getTrendingMoviesPreview = async () => {
      try {
        setLoading(true);
        const { data } = await api('trending/movie/day');
        setTrendingMovies(data.results);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getTrendingMoviesPreview();
  }, []);

  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    const getCategoriesPreview = async () => {
      try {
        const { data } = await api('genre/movie/list');
        setGenres(data.genres);
      } catch (e) {
        setError(e);
      }
    };
    getCategoriesPreview();
  }, []);

  const [categoryMovies, setCategoryMovies] = React.useState([]);
  const getMoviesByCategory = async id => {
    try {
      setLoading(true);
      const { data } = await api('discover/movie', {
        params: {
          with_genres: id,
        },
      });
      setCategoryMovies(data.results);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const [searchMovies, setSearchMovies] = React.useState([]);
  const getMoviesBySearch = async query => {
    try {
      setLoading(true);
      const { data } = await api('/search/movie', {
        params: {
          query,
        },
      });
      setSearchMovies(data.results);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  
  return {
    loading,
    error,
    trendingMovies,
    genres,
    categoryMovies,
    searchMovies,
    getMoviesByCategory,
    getMoviesBySearch,
  };
}

export { useMovieAPI };