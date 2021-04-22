import React from "react";
import TestRenderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {MovieListContainer} from "./movie-list-container";
import * as mock from "test-mock";


test(`render MovieListContainer`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter>
          <MovieListContainer
            movies={mock.MOVIES}
            onMovieCardClick={mock.noop}
            showMoreMoviesAction={mock.noop}
            visibleMoviesCount={mock.ID}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
