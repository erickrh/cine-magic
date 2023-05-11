import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useLocation } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';

function TrendingPage() {
  const location = useLocation();
  const { trendingMovies, paginatedTrendingMovies, getPaginatedTredingMovies } = useMovieAPI();
  
  let trends;
  if (location.state?.trendingMovies) {
    trends = location.state.trendingMovies;
  } else {
    trends = trendingMovies;
  }
  
  const [allMovies, setAllMovies] = React.useState(trends);
  React.useEffect(() => {
    if (paginatedTrendingMovies.length) {
      // console.log(paginatedTrendingMovies);
      const updatedTrends = [...allMovies, ...paginatedTrendingMovies];
      setAllMovies(updatedTrends);
    }
  }, [paginatedTrendingMovies]);

  return (
    <GenericList title={'Trends'} movies={allMovies} getPaginatedTredingMovies={getPaginatedTredingMovies} />
  );
}

export { TrendingPage };
