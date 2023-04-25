import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useLocation, useParams } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';

function CategoryPage() {
  const { getMoviesByCategory, categoryMovies } = useMovieAPI();
  const location = useLocation();
  const { slug } = useParams();

  let name, id, category;
  if (location.state?.genre) {
    name = location.state.genre.name;
    id = location.state.genre.id;
  } else {
    category = slug.split('=');
    id = category[0];
    name = category[1];
  }

  React.useEffect(() => {
    getMoviesByCategory(id);
  }, []);

  return (
    <GenericList title={name} movies={categoryMovies} />
  );
}

export { CategoryPage };