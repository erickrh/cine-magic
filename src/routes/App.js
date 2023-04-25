import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { TrendingPage } from './trending/TrendingPage';
import { CategoryPage } from './category/CategoryPage';
import { SearchPage } from './search/SearchPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/trending' element={<TrendingPage />} />
        
        <Route path='/category/:slug' element={<CategoryPage />} />

        <Route path='/search/:query' element={<SearchPage />} />

        <Route path='*' element={<HomePage />} />
      </Routes>

    </HashRouter>
  );
}

export default App;