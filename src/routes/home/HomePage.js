import React from 'react';
import { Header } from '../../ui/Header';
import { TrendingPreview } from '../../ui/TrendingPreview';
import { CategoriesPreview } from '../../ui/CategoriesPreview';

function HomePage() {
  const getTrendingMoviesPreview = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);
    const data = await res.json();
    const movies = data.results;
    console.log(data);
    console.log(movies);
  };
  getTrendingMoviesPreview();
  
  return (
    <>
      <Header />

      <TrendingPreview />

      <CategoriesPreview />
    </>
  );
}

export { HomePage };