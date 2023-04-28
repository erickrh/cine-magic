import React from 'react';
import '../../routes/App.css';
import './../Header/Header.css';
import './GenericList.css';
import { TopContainer } from '../TopContainer';
import { useNavigate } from 'react-router-dom';

function GenericList(props) {
  const navigate = useNavigate();

  const [triggerMsg, setTriggerMsg] = React.useState(false);
  const counter = setTimeout(() => {
    setTriggerMsg(true);
    clearTimeout(counter);
  }, 500);

  return (
    <>
      <TopContainer title={props?.title} />

      <section id="genericList" className="genericList-container">
        {props.movies.map(movie => {
          if (!movie.poster_path) return;
          else {
            return (
              <div
                key={movie.id}
                onClick={() => navigate(`/details/${movie.id}`)}
                className="movie-container">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  className='movie-img'
                  alt={movie.title}
                />
              </div>
            );
          }
        })}

        {props.error && <p>Ha ocurrido un error: {props.error}</p>}

        {props.loading && <h2>Cargando...</h2>}

        {(!props.movies.length && !props.error && !props.loading && triggerMsg) && (
          <h2>No {props.title} movies found.</h2>
        )}
      </section>
    </>
  );
}

export { GenericList };