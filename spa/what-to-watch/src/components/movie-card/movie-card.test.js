import React from "react";
import TestRenderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import MovieCard from "./movie-card";
import * as mock from "test-mock";


test(`render MovieCard`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter>
          <MovieCard
            movie={mock.MOVIE}
            onMovieCardClick={mock.noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
