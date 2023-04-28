import React from 'react';
import { useNavigate } from 'react-router-dom';

function CategoriesPreviewList({ genres }) {
  const navigate = useNavigate();

  return (
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
  );
}

export { CategoriesPreviewList };