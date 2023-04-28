import React from 'react';
import { Header } from '../../ui/Header';
import { TrendingPreview } from '../../ui/TrendingPreview';
import { CategoriesPreview } from '../../ui/CategoriesPreview';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { MovieList } from '../../ui/MovieList';
import { CategoriesPreviewList } from '../../ui/CategoriesPreviewList';

function HomePage() {
  const {
    loading,
    error,
    trendingMovies,
    genres,
  } = useMovieAPI();

  return (
    <>
      <Header />

      <TrendingPreview
        loading={loading}
        error={error}
        trendingMovies={trendingMovies}
        render={movie => (
          <MovieList
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
          />
        )}
      />

      <CategoriesPreview>
        <CategoriesPreviewList genres={genres} />
      </CategoriesPreview>
    </>
  );
}

export { HomePage };