import React from 'react';
import './Header.css';
import '../../routes/App.css';

function Header() {
  return (
    <header id='header' className='header-container'>
      <h1 className='header-title'>Cine Magic</h1>

      <form id='searchForm' className='header-searchForm'>
        <input type='text' placeholder='Harry Potter' />
        <button>🔍</button>
      </form>
    </header>
  );
}
export { Header };