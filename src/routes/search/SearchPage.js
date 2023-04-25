import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useParams } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { Header } from '../../ui/Header';

function SearchPage() {
  const { query } = useParams();
  
  const { searchMovies, getMoviesBySearch } = useMovieAPI();

  React.useEffect(() => {
    getMoviesBySearch(query);
  }, [searchMovies]);

  return (
    <>
      <Header />
      <GenericList title={query} movies={searchMovies} />
    </>
  );
}
export { SearchPage };