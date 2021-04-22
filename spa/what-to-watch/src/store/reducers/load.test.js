import load from "./load";
import {ActionType} from 'const';
import * as mock from "test-mock";


const initialState = {
  movies: [],
  moviePromo: {},
};

test(`reducer load without parameters`, () => {
  expect(load(initialState, {})).toEqual(initialState);
});

test(`reducer load with movies`, () => {
  expect(load(initialState, {
    type: ActionType.LOAD_MOVIES,
    movies: mock.MOVIES
  })).toEqual({
    movies: mock.MOVIES,
    moviePromo: {},
  });
});

test(`reducer load with movie promo`, () => {
  expect(load(initialState, {
    type: ActionType.LOAD_MOVIE_PROMO,
    moviePromo: mock.MOVIE
  })).toEqual({
    movies: [],
    moviePromo: mock.MOVIE,
  });
});

test(`reducer load with comments`, () => {
  expect(load({
    movies: mock.MOVIES,
    moviePromo: {},
  }, {
    type: ActionType.LOAD_COMMENTS,
    comments: mock.REVIEWS,
    id: mock.ID
  })).toEqual({
    movies: mock.MOVIES,
    moviePromo: {},
  });
});
