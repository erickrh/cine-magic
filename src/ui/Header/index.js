import React from 'react';
import './Header.css';
import '../../routes/App.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const locationHash = location.pathname.split('/');
  const [inputSearchMovie, setInputSearchMovie] = React.useState('');

  const onSearchValueChange = event => {
    setInputSearchMovie(event.target.value);
  };

  const goToSearchPage = event => {
    const inputPlaceholder = document.querySelector('.header-searchForm input');
    
    if (inputSearchMovie.length > 0) {
      navigate(`/search/${inputSearchMovie}`);
    } else {
      inputPlaceholder.placeholder = 'Oops, you forgot the name!';
    }
    event.preventDefault();
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') goToSearchPage(event);
  };

  return (
    <header id='header' className='header-container'>

      <div className="languageContainer">
        <select name="language-select" id="language-select" className='language-select'>
          <option value="en">🇺🇸 English</option>
          <option value="es">🇪🇸 Español</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
      </div>

      {
        locationHash[1] !== 'search' && (
          <h1 className='header-title'>Cine Magic</h1>
        )
      }

      <form id='searchForm' className='header-searchForm' onSubmit={goToSearchPage}>
        <input
          value={inputSearchMovie}
          onChange={onSearchValueChange}
          type='text'
          placeholder='Harry Potter'
          onKeyDown={onKeyDown}
        />
        <button type='submit'>🔍</button>
      </form>
    </header>
  );
}
export { Header };