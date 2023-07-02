import React from 'react';

function useLocalStorage() {
  const [getLikedMovies, setGetLikedMovies] = React.useState([]);
  const [trigger, setTrigger] = React.useState(1);
  
  React.useEffect(() => {
    let movies;
    const item = JSON.parse(localStorage.getItem('liked_movies'));
    if (item) movies = item;
    else movies = {};
    setGetLikedMovies(Object.values(movies));
    console.log(trigger);
  }, [trigger]);

  const likeMovie = movie => {
    const likedMovies = [...getLikedMovies];
    const indexMovie = likedMovies.findIndex(m => m.id === movie.id);
    if (indexMovie === -1) {
      likedMovies.unshift(movie);
    }
    else {
      likedMovies.splice(indexMovie, 1);
    }

    localStorage.setItem('liked_movies', JSON.stringify(likedMovies));
    setGetLikedMovies(likedMovies);
    setTrigger(trigger + 1);
  };

  return {
    getLikedMovies,
    likeMovie,
  };
}

export { useLocalStorage };