import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useLocation } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';

function TrendingPage() {
  const location = useLocation();
  const { trendingMovies } = useMovieAPI();

  let trends;
  if (location.state?.trendingMovies) {
    trends = location.state.trendingMovies;
  } else {
    trends = trendingMovies;
  }

  return (
    <GenericList title={'Trends'} movies={trends} />
  );
}

export { TrendingPage };