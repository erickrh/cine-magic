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

    if (movie.id in likedMovies) likedMovies[movie.id] = undefined;
    else likedMovies[movie.id] = movie;

    localStorage.setItem('liked_movies', JSON.stringify(likedMovies));
  };
  
  const getLikedMovies = () => {
    const likedMovies = likedMovieList();
    return Object.values(likedMovies);
  };

  return { likeMovie, getLikedMovies };
}

export { useLocalStorage };