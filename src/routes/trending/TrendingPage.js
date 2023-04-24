import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useLocation } from 'react-router-dom';

function TrendingPage() {
  const location = useLocation();

  let trends;
  if (location.state?.trendingMovies) {
    trends = location.state.trendingMovies;
  }

  return (
    <GenericList title={'Tendencia'} movies={trends} />
  );
}

export { TrendingPage };