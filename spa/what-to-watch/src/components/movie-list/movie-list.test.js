import React from "react";
import TestRenderer from "react-test-renderer";
import MovieList from "./movie-list";
import {BrowserRouter} from 'react-router-dom';
import * as mock from "test-mock";


test(`render MovieList`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter>
          <MovieList
            movies={mock.MOVIES}
            onMovieCardClick={mock.noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
