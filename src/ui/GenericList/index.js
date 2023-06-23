import React from 'react';
import '../../routes/App.css';
import './../Header/Header.css';
import './GenericList.css';
import { TopContainer } from '../TopContainer';
import { useNavigate } from 'react-router-dom';
import { LikeButton } from '../LikeButton';

function GenericList(props) {
  const navigate = useNavigate();
  const [triggerMsg, setTriggerMsg] = React.useState(false);
  const observerRef = React.useRef();
  const scrollEnd = React.useRef();


  React.useEffect(() => {
    const counter = setTimeout(() => {
      setTriggerMsg(true);
      clearTimeout(counter);
    }, 1000);

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entry, observer) => {
      if (entry[0].isIntersecting) {
        props.getPaginatedMovies();
        observer.unobserve(entry[0].target);
      }
    });

    observerRef.current.observe(scrollEnd.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [props.movies]);

  const uniqueMovieIds = new Set();
  const filteredMovies = props.movies.filter(movie => {
    if (uniqueMovieIds.has(movie.id)) {
      return false;
    }
    uniqueMovieIds.add(movie.id);
    return true;
  });

  return (
    <>
      <TopContainer title={props?.title} />

      <section id="genericList" className="genericList-container">
        {filteredMovies.map(movie => {
          if (!movie.poster_path) return null;
          return (
            <div
              key={movie.id}
              onClick={() => navigate(`/details/${movie.id}`)}
              className="movie-container"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                className="movie-img movieScrollAnimation"
                alt={movie.title}
              />
              <LikeButton />
            </div>
          );
        })}

        {props.error && <p>Ha ocurrido un error: {props.error}</p>}

        {props.loading && <h2>Cargando...</h2>}

        {!props.movies.length && !props.error && !props.loading && triggerMsg && (
          <h2>No {props.title} movies found.</h2>
        )}

        <span className='scrollEnd' ref={scrollEnd}></span>
      </section>
    </>
  );
}

export { GenericList };
