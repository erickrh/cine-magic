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
import { useLanguageContext } from '../../hooks/useLanguageContext';

function HomePage() {
  const {
    loading,
    error,
    trendingMovies,
    genres,
    loadingCategoriesPreview,
  } = useMovieAPI();
  
  const { getLikedMovies, likeMovie } = useLocalStorage();

  const {
    nodesLanguage,
    language,
    changeLanguage,
  } = useLanguageContext();
  
  return (
    <>
      <Header
        language={language}
        nodesLanguage={nodesLanguage}
        changeLanguage={newLanguage => changeLanguage(newLanguage)}
      />

      <TrendingPreview
        error={error}
        loading={loading}
        nodesLanguage={nodesLanguage}
        trendingMovies={trendingMovies}
        onLoading={() => <OnLoadingTrending />}
        render={movie => (
          <MovieList
            id={movie.id}
            movie={movie}
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            getLikedMovies={getLikedMovies}
            likeMovie={likeMovie}
          />
        )}
      />

      <CategoriesPreview
        loading={loadingCategoriesPreview}
        nodesLanguage={nodesLanguage}
        OnLoading={() => <Onloadingcategories />}
      >
        <CategoriesPreviewList genres={genres} />
      </CategoriesPreview>

      <FavoriteMovies
        error={error}
        loading={loading}
        nodesLanguage={nodesLanguage}
        getLikedMovies={getLikedMovies}
        onLoading={() => <OnLoadingTrending />}
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

      <Footer nodesLanguage={nodesLanguage} />
    </>
  );
}

export { HomePage };