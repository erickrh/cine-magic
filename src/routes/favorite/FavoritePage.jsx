import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { GenericList } from '../../ui/GenericList';

function FavoritePage() {
  const { getLikedMovies } = useLocalStorage();

  return (
    <GenericList
      title={'Favorite'}
      movies={getLikedMovies}
      getPaginatedMovies={null}
    />
  );
}

export { FavoritePage };