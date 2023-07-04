import React from 'react';
import { GenericList } from '../../ui/GenericList';
import { useLocation } from 'react-router-dom';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { useLanguageContext } from '../../hooks/useLanguageContext';

function TrendingPage() {
  const location = useLocation();
  
  const {
    trendingMovies,
    paginatedTrendingMovies,
    getPaginatedTredingMovies
  } = useMovieAPI();

  const { nodesLanguage } =  useLanguageContext();
  
  let trends;
  if (location.state?.trendingMovies) {
    trends = location.state.trendingMovies;
  } else {
    trends = trendingMovies;
  }
  
  const [allMovies, setAllMovies] = React.useState(trends);
  React.useEffect(() => {
    if (paginatedTrendingMovies.length) {
      const updatedTrends = [...allMovies, ...paginatedTrendingMovies];
      setAllMovies(updatedTrends);
    }
  }, [paginatedTrendingMovies]);
  
  return (
    <GenericList
      title={nodesLanguage.trends}
      movies={allMovies}
      getPaginatedMovies={getPaginatedTredingMovies}
    />
  );
}

export { TrendingPage };
