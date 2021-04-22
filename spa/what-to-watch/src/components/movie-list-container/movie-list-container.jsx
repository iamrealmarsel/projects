import React from 'react';
import PropTypes from 'prop-types';
import ShowMoreButton from 'components/show-more-button/show-more-button';
import MovieList from 'components/movie-list/movie-list';
import {MOVIE_COUNT_STEP} from 'const';
import {moviesPropTypes} from 'store/prop-types';
import {getVisibleMovies, isEnableShowMoreButton} from 'store/selector';
import connect from 'components/movie-list-container/movie-list-container.connect';


const MovieListContainer = (props) => {
  const {movies, visibleMoviesCount, showMoreMoviesAction, onMovieCardClick} = props;
  const visibleMovies = getVisibleMovies(movies, visibleMoviesCount);
  const showMoreButton = isEnableShowMoreButton(movies, visibleMoviesCount);

  const handleButtonClick = () => {
    showMoreMoviesAction(visibleMoviesCount + MOVIE_COUNT_STEP);
  };

  return (
    <React.Fragment>
      <MovieList movies={visibleMovies} onMovieCardClick={onMovieCardClick} />
      {showMoreButton && <ShowMoreButton onButtonClick={handleButtonClick} />}
    </React.Fragment>
  );
};

MovieListContainer.propTypes = {
  movies: moviesPropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
  visibleMoviesCount: PropTypes.number.isRequired,
  showMoreMoviesAction: PropTypes.func.isRequired,
};


export {MovieListContainer};
export default connect(MovieListContainer);
