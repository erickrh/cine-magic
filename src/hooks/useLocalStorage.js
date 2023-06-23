// eslint-disable-next-line no-unused-vars
import React from 'react';

function useLocalStorage() {
  const likedMovieList = () => {
    const item = JSON.parse(localStorage.getItem('liked_movies'));
    let movies;
  
    if (item) movies = item;
    else movies = {};

    return movies;
  };

  const likeMovie = movie => {
    const likedMovies = likedMovieList();

    if (likeMovie[movie.id]) likedMovies[movie.id] = undefined;
    else likedMovies[movie.id] = movie;

    localStorage.setItem('liked_movies', JSON.stringify(likedMovies));
  };

  return likeMovie;
}

export { useLocalStorage };