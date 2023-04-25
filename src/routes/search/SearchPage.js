import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useParams } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';

function SearchPage() {
  const { query } = useParams();
  
  const { searchMovies, getMoviesBySearch } = useMovieAPI();

  React.useEffect(() => {
    getMoviesBySearch(query);
  }, []);

  return (
    <GenericList title={query} movies={searchMovies} />
  );
}
export { SearchPage };