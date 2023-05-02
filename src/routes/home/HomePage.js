import React from 'react';
import { Header } from '../../ui/Header';
import { TrendingPreview } from '../../ui/TrendingPreview';
import { CategoriesPreview } from '../../ui/CategoriesPreview';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { MovieList } from '../../ui/MovieList';
import { CategoriesPreviewList } from '../../ui/CategoriesPreviewList';
import { Footer } from '../../ui/Footer';
import { OnLoadingTrending } from '../../ui/OnLoadingTrending';
import { Onloadingcategories } from '../../ui/Onloadingcategories';

function HomePage() {
  const {
    loading,
    error,
    trendingMovies,
    genres,
    loadingCategoriesPreview,
  } = useMovieAPI();

  return (
    <>
      <Header />

      <TrendingPreview
        loading={loading}
        error={error}
        trendingMovies={trendingMovies}
        onLoading={() => <OnLoadingTrending />}
        render={movie => (
          <MovieList
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
          />
        )}
      />

      <CategoriesPreview
        loading={loadingCategoriesPreview}
        OnLoading={() => <Onloadingcategories />}
      >
        <CategoriesPreviewList genres={genres} />
      </CategoriesPreview>

      <Footer />
    </>
  );
}

export { HomePage };