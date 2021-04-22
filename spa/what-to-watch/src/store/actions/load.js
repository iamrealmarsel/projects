import {ActionType} from 'const';


export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  movies,
});

export const loadMoviePromo = (moviePromo) => ({
  type: ActionType.LOAD_MOVIE_PROMO,
  moviePromo,
});

export const loadComments = (id, comments) => ({
  type: ActionType.LOAD_COMMENTS,
  comments,
  id,
});
