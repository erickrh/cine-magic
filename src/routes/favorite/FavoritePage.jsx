import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { GenericList } from '../../ui/GenericList';
import { useLanguageContext } from '../../hooks/useLanguageContext';

function FavoritePage() {
  const { getLikedMovies } = useLocalStorage();

  const { nodesLanguage } = useLanguageContext();

  return (
    <GenericList
      title={nodesLanguage.favoriteMovies}
      movies={getLikedMovies}
      getPaginatedMovies={null}
    />
  );
}

export { FavoritePage };