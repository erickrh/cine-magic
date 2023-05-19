import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useParams } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { Header } from '../../ui/Header';

function SearchPage() {
  const { query } = useParams();
  
  const {
    loading,
    error,
    searchMovies,
    paginatedMoviesBySearch,
    getMoviesBySearch,
    getPaginatedMoviesBySearch,
  } = useMovieAPI();

  React.useEffect(() => {
    getMoviesBySearch(query);
  }, [query]);

  const [allMovies, setAllMovies] = React.useState(searchMovies);
  React.useEffect(() => {
    const updateSearchMovies = [...allMovies, ...paginatedMoviesBySearch];
    setAllMovies(updateSearchMovies);
  }, [paginatedMoviesBySearch]);

  return (
    <>
      <Header />
      <GenericList
        loading={loading}
        error={error}
        title={query}
        movies={allMovies}
        getPaginatedMovies={() => getPaginatedMoviesBySearch(query)}
      />
    </>
  );
}
export { SearchPage };