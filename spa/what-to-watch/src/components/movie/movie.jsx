import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import connect from 'components/movie/movie.connect';
import MovieList from 'components/movie-list/movie-list';
import Tabs from 'components/tabs/tabs';
import Header from 'components/header/header';
import {moviesPropTypes} from 'store/prop-types';
import {getAlikeMovies, getMovieByID} from 'store/selector';
import Footer from 'components/footer/footer';
import browserHistory from 'browser-history';
import MyListButton from 'components/my-list-button/my-list-button';


const Movie = (props) => {
  const {movies, onMovieCardClick, match, isAuthenticated} = props;
  const id = Number(match.params.id);
  const currentMovie = getMovieByID(movies, id);
  const alikeMovies = getAlikeMovies(movies, currentMovie);
  const {title, genre, releaseYear, poster, background} = currentMovie;

  const handleButtonPlayClick = () => {
    browserHistory.push(`/player/${id}`);
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={handleButtonPlayClick} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                {isAuthenticated && <MyListButton movie={currentMovie} />}
                {isAuthenticated && <Link className="btn movie-card__button" to={`/films/${id}/review`}>Add review</Link>}

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt="The Grand Budapest Hotel poster"
                width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              <Tabs movie={currentMovie} />

            </div>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={alikeMovies} onMovieCardClick={onMovieCardClick} />
        </section>

        <Footer />

      </div>
    </React.Fragment>
  );
};

Movie.propTypes = {
  movies: moviesPropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};


export {Movie};
export default connect(Movie);
