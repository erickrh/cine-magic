import React from 'react';
import './Header.css';
import '../../routes/App.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [inputSearchMovie, setInputSearchMovie] = React.useState('');

  const onSearchValueChange = event => {
    setInputSearchMovie(event.target.value);
  };

  const goToSearchPage = () => {
    navigate(`/search/${inputSearchMovie}`);
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') goToSearchPage();
  };

  return (
    <header id='header' className='header-container'>
      <h1 className='header-title'>Cine Magic</h1>

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