import React from 'react';
import '../../routes/App.css';
import './CategoriesPreview.css';

function CategoriesPreview() {
  return (
    <section id='categoriesPreview' className='categoriesPreview-container'>
      <h2 className='categoriesPreview-title'>Categorías</h2>

      <article className='categoriesPreview-list'>
        <div className='category-container'>
          <h3 id='id28' className='category-title'>
            Romance
          </h3>
        </div>

        <div className='category-container'>
          <h3 id='id16' className='category-title'>
            Drama
          </h3>
        </div>

        <div className='category-container'>
          <h3 id='id14' className='category-title'>
            Acción
          </h3>
        </div>
      </article>
    </section>
  );
}

export { CategoriesPreview };