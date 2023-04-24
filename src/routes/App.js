import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { TrendingPage } from './trending/TrendingPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />

        <Route element={<TrendingPage />} path='/trending' />

        <Route element={<HomePage />} path='*' />
      </Routes>

    </HashRouter>
  );
}

export default App;