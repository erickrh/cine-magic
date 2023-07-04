import React from 'react';
import '../../routes/App.css';
import './CategoriesPreview.css';

function CategoriesPreview({
  children,
  loading,
  OnLoading,
  language,
  translation,
}) {

  const categoryText = translation[language].categories;

  return (
    <section id='categoriesPreview' className='categoriesPreview-container'>
      <h2 className='categoriesPreview-title'>{categoryText}</h2>

      {loading && OnLoading()}

      {!loading && children }
    </section>
  );
}

export { CategoriesPreview };