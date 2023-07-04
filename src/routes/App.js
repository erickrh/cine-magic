import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { TrendingPage } from './trending/TrendingPage';
import { CategoryPage } from './category/CategoryPage';
import { SearchPage } from './search/SearchPage';
import { DetailsPage } from './details/DetailsPage';
import { FavoritePage } from './favorite/FavoritePage';
import { LanguageProvider } from '../hooks/useLanguageContext';

function App() {
  return (
    <HashRouter>
      <LanguageProvider>

        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/trending' element={<TrendingPage />} />
        
          <Route path='/category/:slug' element={<CategoryPage />} />

          <Route path='/search/:query' element={<SearchPage />} />

          <Route path='/details/:movieId' element={<DetailsPage />} />

          <Route path='/favorite' element={<FavoritePage />} />

          <Route path='*' element={<HomePage />} />
        </Routes>
        
      </LanguageProvider>
    </HashRouter>
  );
}

export default App;