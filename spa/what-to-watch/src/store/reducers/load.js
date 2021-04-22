import {ActionType} from 'const';


const initialState = {
  movies: [],
  moviePromo: {},
};

const load = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return Object.assign(
          {},
          state,
          {
            movies: action.movies
          });

    case ActionType.LOAD_MOVIE_PROMO:
      return Object.assign(
          {},
          state,
          {
            moviePromo: action.moviePromo
          });

    case ActionType.LOAD_COMMENTS:
      const newState = Object.assign({}, state);
      const index = newState.movies.findIndex((movie) => movie.id === action.id);
      newState.movies[index].comments = action.comments;

      return newState;
  }

  return state;
};


export default load;
