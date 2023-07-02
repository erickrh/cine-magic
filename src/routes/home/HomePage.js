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
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FavoriteMovieList } from '../../ui/FavoriteMovieList';

function HomePage() {
  const {
    loading,
    error,
    trendingMovies,
    genres,
    loadingCategoriesPreview,
  } = useMovieAPI();
  
  const { getLikedMovies, likeMovie } = useLocalStorage();
  
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
            getLikedMovies={getLikedMovies}
            key={movie.id}
            id={movie.id}
            title={movie.title}
            movie={movie}
            image={movie.poster_path}
            likeMovie={likeMovie}
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
        loading={loading}
        error={error}
        onLoading={() => <OnLoadingTrending />}
        getLikedMovies={getLikedMovies}
        render={movie => (
          <FavoriteMovieList
            getLikedMovies={getLikedMovies}
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            movie={movie}
            likeMovie={likeMovie}
          />
        )}
      />

      <Footer />
    </>
  );
}

export { HomePage };