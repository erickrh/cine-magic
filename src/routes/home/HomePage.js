import React from 'react';
import { Header } from '../../ui/Header';
import { TrendingPreview } from '../../ui/TrendingPreview';
import { CategoriesPreview } from '../../ui/CategoriesPreview';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { MovieList } from '../../ui/MovieList';

function HomePage() {
  const { trendingMovies, genres } = useMovieAPI();

  return (
    <>
      <Header />

      <TrendingPreview trendingMovies={trendingMovies}
        render={movie => (
          <MovieList
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
          />
        )}
      />

      <CategoriesPreview genres={genres} />
    </>
  );
}

export { HomePage };