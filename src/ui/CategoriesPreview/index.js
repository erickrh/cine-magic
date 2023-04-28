import React from 'react';
import '../../routes/App.css';
import './CategoriesPreview.css';

function CategoriesPreview({ children }) {

  return (
    <section id='categoriesPreview' className='categoriesPreview-container'>
      <h2 className='categoriesPreview-title'>Categories</h2>

      { children }
    </section>
  );
}

export { CategoriesPreview };