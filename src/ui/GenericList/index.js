import React from 'react';
import '../../routes/App.css';
import './../Header/Header.css';
import './GenericList.css';
import { TopContainer } from '../TopContainer';
import { useNavigate } from 'react-router-dom';
import { LikeButton } from '../LikeButton';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useLanguageContext } from '../../hooks/useLanguageContext';

function GenericList(props) {
  const { likeMovie, getLikedMovies } = useLocalStorage();
  const navigate = useNavigate();
  const [triggerMsg, setTriggerMsg] = React.useState(false);
  const observerRef = React.useRef();
  const scrollEnd = React.useRef();
  const { nodesLanguage } = useLanguageContext();

  React.useEffect(() => {
    const counter = setTimeout(() => {
      setTriggerMsg(true);
      clearTimeout(counter);
    }, 1000);

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entry, observer) => {
      if (entry[0].isIntersecting && props.getPaginatedMovies) {
        props.getPaginatedMovies();
        observer.unobserve(entry[0].target);
      }
    });

    if (props.finishSearch) {
      observerRef.current.disconnect();
    } else {
      observerRef.current.observe(scrollEnd.current);
    }

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

              <LikeButton
                movie={movie}
                getLikedMovies={getLikedMovies}
                likeMovie={likeMovie}
              />
            </div>
          );
        })}

        {props.error && <p>{nodesLanguage.error}: {props.error}</p>}

        {props.loading && <h2>{nodesLanguage.loading}</h2>}

        {!props.movies.length && !props.error && !props.loading && triggerMsg && (
          <h2>{nodesLanguage.noFound} {props.title}.</h2>
        )}

        <span className='scrollEnd' ref={scrollEnd}></span>
      </section>
    </>
  );
}

export { GenericList };
