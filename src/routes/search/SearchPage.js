/* eslint-disable no-unused-vars */
import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useParams } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { Header } from '../../ui/Header';
import { useLanguageContext } from '../../hooks/useLanguageContext';

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

  const { nodesLanguage } = useLanguageContext();
  
  const [allMovies, setAllMovies] = React.useState(searchMovies);

  React.useEffect(() => {
    getMoviesBySearch(query);
    setAllMovies([]);
  }, [query]);
  
  React.useEffect(() => {
    const updateSearchMovies = [...allMovies, ...paginatedMoviesBySearch];
    setAllMovies(updateSearchMovies);
  }, [paginatedMoviesBySearch]);
  
  return (
    <>
      <Header nodesLanguage={nodesLanguage} />
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