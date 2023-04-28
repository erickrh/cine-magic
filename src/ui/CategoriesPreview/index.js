import React from 'react';
import '../../routes/App.css';
import './CategoriesPreview.css';
import { useNavigate } from 'react-router-dom';

function CategoriesPreview({ genres }) {
  const navigate = useNavigate();

  return (
    <section id='categoriesPreview' className='categoriesPreview-container'>
      <h2 className='categoriesPreview-title'>Categories</h2>

      <article className='categoriesPreview-list'>
        {genres.map(genre => (
          <div
            onClick={() => navigate(`/category/${genre.id}=${genre.name}`, {
              state: { genre }
            })}
            key={genre.id}
            className='category-container'>
            <h3 id={`id${genre.id}`} className='category-title'>
              {genre.name}
            </h3>
          </div>
        ))}
      </article>
    </section>
  );
}

export { CategoriesPreview };