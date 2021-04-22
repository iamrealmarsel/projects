import movies from "./movies";
import {ALL_GENRES, ActionType, MOVIE_COUNT_STEP} from 'const';
import * as mock from "test-mock";


const initialState = {
  currentGenre: ALL_GENRES,
  visibleMoviesCount: MOVIE_COUNT_STEP,
  isApplicationReady: false,
  commentsCheck: null,
};

test(`reducer movies without parameters`, () => {
  expect(movies(initialState, {})).toEqual(initialState);
});

test(`reducer movies with genre`, () => {
  expect(movies(initialState, {
    type: ActionType.CHANGE_GENRE,
    genre: mock.CURRENT_GENRE
  })).toEqual({
    currentGenre: mock.CURRENT_GENRE,
    visibleMoviesCount: MOVIE_COUNT_STEP,
    isApplicationReady: false,
    commentsCheck: null,
  });
});

test(`reducer movies with movie count`, () => {
  expect(movies(initialState, {
    type: ActionType.SHOW_MORE_MOVIES,
    visibleMoviesCount: mock.VISIBLE_MOVIES_COUNT
  })).toEqual({
    currentGenre: ALL_GENRES,
    visibleMoviesCount: mock.VISIBLE_MOVIES_COUNT,
    isApplicationReady: false,
    commentsCheck: null,
  });
});

test(`reducer movies with application ready`, () => {
  expect(movies(initialState, {
    type: ActionType.ENABLE_APPLICATION,
  })).toEqual({
    currentGenre: ALL_GENRES,
    visibleMoviesCount: MOVIE_COUNT_STEP,
    isApplicationReady: true,
    commentsCheck: null,
  });
});

test(`reducer movies with comments check`, () => {
  expect(movies(initialState, {
    type: ActionType.DISPLAY_СOMMENTS,
    commentsCheck: mock.REVIEWS
  })).toEqual({
    currentGenre: ALL_GENRES,
    visibleMoviesCount: MOVIE_COUNT_STEP,
    isApplicationReady: false,
    commentsCheck: mock.REVIEWS,
  });
});

