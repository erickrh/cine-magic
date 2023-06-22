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
import { FavoriteMovies } from '../../ui/FavoriteMovies';
import { LikeButton } from '../../ui/LikeButton';

function HomePage() {
  const {
    loading,
    error,
    trendingMovies,
    genres,
    loadingCategoriesPreview,
  } = useMovieAPI();

  const {
    isLike,
    handleLikeClick
  } = LikeButton();

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

      <FavoriteMovies
        isLike={isLike}
        handleLikeClick={handleLikeClick}
        loading={loading}
        error={error}
        onLoading={() => <OnLoadingTrending />}
      />

      <Footer />
    </>
  );
}

export { HomePage };