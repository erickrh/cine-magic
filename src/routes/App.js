import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage';

function App() {
  const getTrendingMoviesPreview = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);
    const data = await res.json();
    const movies = data.results;
    console.log(data);
    console.log(movies);
  };
  getTrendingMoviesPreview();

  return (
    <HashRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />

        <Route element={<HomePage />} path='*' />
      </Routes>

    </HashRouter>
  );
}

export default App;
