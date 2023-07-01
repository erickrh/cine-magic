import React from 'react';

function useLocalStorage() {
  const [sync, setSync] = React.useState(true);
  
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
  
  React.useEffect(() => {
    likedMovieList();
    getLikedMovies();
    console.log(sync);
  }, [sync]);

  return { likeMovie, getLikedMovies, setSync };
}

export { useLocalStorage };