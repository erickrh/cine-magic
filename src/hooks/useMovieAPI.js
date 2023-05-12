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

  const [paginatedTrendingMovies, setPaginatedTrendingMovies] = React.useState([]);
  const [page, setPage] = React.useState(2);
  const getPaginatedTredingMovies = async () => {
    try {
      setLoading(true);
      const { data } = await api('trending/movie/day', {
        params: {
          page: page,
        }
      });
      setPaginatedTrendingMovies(data.results);
    } catch (e) {
      setError(e);
    }
    setPage(page + 1);
    setLoading(false);
  };

  const [genres, setGenres] = React.useState([]);
  const [loadingCategoriesPreview, setLoadingCategoriesPreview] = React.useState(false);
  React.useEffect(() => {
    const getCategoriesPreview = async () => {
      try {
        setLoadingCategoriesPreview(true);
        const { data } = await api('genre/movie/list');
        setGenres(data.genres);
      } catch (e) {
        setError(e);
      }
      setLoadingCategoriesPreview(false);
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

  const [movieDetails, setMovieDetails] = React.useState({});
  const getMovieDetails = async id => {
    const { data: movie } = await api('movie/' + id);
    setMovieDetails(movie);
  };

  const [similarMovies, setSimilarMovies] = React.useState([]);
  const getSimilarMovies = async id => {
    const { data } = await api(`/movie/${id}/similar`);
    setSimilarMovies(data.results);
  };
  
  return {
    loading,
    error,
    trendingMovies,
    genres,
    categoryMovies,
    searchMovies,
    movieDetails,
    similarMovies,
    loadingCategoriesPreview,
    paginatedTrendingMovies,
    getMoviesByCategory,
    getMoviesBySearch,
    getMovieDetails,
    getSimilarMovies,
    getPaginatedTredingMovies,
  };
}

export { useMovieAPI };