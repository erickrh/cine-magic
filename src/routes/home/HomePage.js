import React from 'react';
import { Header } from '../../ui/Header';
import { TrendingPreview } from '../../ui/TrendingPreview';
import { CategoriesPreview } from '../../ui/CategoriesPreview';
import { useMovieAPI } from '../../hooks/useMovieAPI';

function HomePage() {
  const { trendingMovies } = useMovieAPI();

  return (
    <>
      <Header />

      <TrendingPreview trendingMovies={ trendingMovies } />

      <CategoriesPreview />
    </>
  );
}

export { HomePage };