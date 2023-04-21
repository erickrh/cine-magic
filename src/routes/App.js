import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage';

function App() {
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
