import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useLocation } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';

function CategoryPage() {
  const { getMoviesByCategory, categoryMovies } = useMovieAPI();
  const location = useLocation();

  let category;
  if (location.state?.genre) category = location.state.genre;

  React.useEffect(() => {
    getMoviesByCategory(category.id);
  }, []);

  return (
    <GenericList title={category.name} movies={categoryMovies} />
  );
}

export { CategoryPage };