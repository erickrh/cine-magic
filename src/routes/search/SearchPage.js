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
    getMoviesBySearch,
  } = useMovieAPI();

  React.useEffect(() => {
    getMoviesBySearch(query);
  }, [query]);

  return (
    <>
      <Header />
      <GenericList
        loading={loading}
        error={error}
        title={query}
        movies={searchMovies} />
    </>
  );
}
export { SearchPage };