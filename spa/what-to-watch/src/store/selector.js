import {ALL_GENRES, ALIKE_MOVIE_COUNT, RatingText, RatingRange} from 'const';
import moment from 'moment';


const TOGGLER_PROGRESS_PERCENT_MAX = 100;

export const getMoviesByGenre = (movies, genre) => {
  if (genre === ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

export const getGenres = (movies) => {
  const genres = movies.map((movie) => movie.genre);

  return [ALL_GENRES, ...new Set(genres)];
};

export const getVisibleMovies = (movies, visibleMoviesCount) => {
  const visibleMovies = movies.slice(0, visibleMoviesCount);

  return visibleMovies;
};

export const isEnableShowMoreButton = (movies, visibleMoviesCount) => movies.length > visibleMoviesCount;

export const getAlikeMovies = (movies, currentMovie) => {
  const totalAlikeMovies =
    movies.filter((movie) => movie.id !== currentMovie.id && movie.genre === currentMovie.genre);

  if (totalAlikeMovies.length <= ALIKE_MOVIE_COUNT) {
    return totalAlikeMovies;
  }

  let alikeMovies = [];

  for (let i = 0; i < ALIKE_MOVIE_COUNT; i++) {
    alikeMovies.push(totalAlikeMovies[i]);
  }

  return alikeMovies;
};

export const convertMinutesToHoursAndMinutes = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = (totalMinutes - minutes) / 60;

  return `${hours}h ${minutes}m`;
};

export const convertRatingToText = (rating) => {
  if (rating >= RatingRange.BAD_MIN && rating <= RatingRange.BAD_MAX) {
    return RatingText.BAD;
  }
  if (rating >= RatingRange.NORMAL_MIN && rating <= RatingRange.NORMAL_MAX) {
    return RatingText.NORMAL;
  }
  if (rating >= RatingRange.GOOD_MIN && rating <= RatingRange.GOOD_MAX) {
    return RatingText.GOOD;
  }
  if (rating >= RatingRange.VERY_GOOD_MIN && rating <= RatingRange.VERY_GOOD_MAX) {
    return RatingText.VERY_GOOD;
  }
  if (rating === RatingRange.AWESOME) {
    return RatingText.AWESOME;
  }

  return null;
};

export const getMyList = (movies) => {
  return movies.filter((movie) => movie.myList);
};

export const getMovieByID = (movies, id) => {
  return movies.find((movie) => movie.id === id);
};

export const formatDate = (date) => {
  return moment(date).format(`MMMM D, YYYY`);
};

export const getTogglerProgress = (currentTime, duration) => {
  const togglerProgress = Math.ceil(TOGGLER_PROGRESS_PERCENT_MAX * currentTime / duration);
  return togglerProgress;
};

export const getElapsedTime = (currentTime, duration) => {
  const totalSeconds = Math.ceil(duration - currentTime);
  const seconds = totalSeconds % 60;
  const totalMinutes = (totalSeconds - seconds) / 60;
  const minutes = totalMinutes % 60;
  const hours = (totalMinutes - minutes) / 60;

  return `${hours}:${minutes}:${seconds}`;
};
