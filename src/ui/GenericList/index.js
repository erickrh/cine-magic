import React from 'react';
import '../../routes/App.css';
import './../Header/Header.css';
import './GenericList.css';
import { TopContainer } from '../TopContainer';

function GenericList(props) {
  return (
    <>
      <TopContainer title={props.title} />

      <section id="genericList" className="genericList-container">
        {props.movies.map(movie => (
          <div key={movie.id} className="movie-container">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              className='movie-img'
              alt={movie.title}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export { GenericList };