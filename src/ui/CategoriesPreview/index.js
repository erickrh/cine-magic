import React from 'react';
import '../../routes/App.css';
import './CategoriesPreview.css';

function CategoriesPreview({
  children,
  loading,
  OnLoading,
  nodesLanguage,
}) {

  return (
    <section id='categoriesPreview' className='categoriesPreview-container'>
      <h2 className='categoriesPreview-title'>{nodesLanguage.categories}</h2>

      {loading && OnLoading()}

      {!loading && children }
    </section>
  );
}

export { CategoriesPreview };