import React from "react";
import TestRenderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Movie} from "./movie";
import * as mock from "test-mock";


test(`render Movie`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <Movie
              movies={mock.MOVIES}
              match={mock.MATCH}
              onMovieCardClick={mock.noop}
              isAuthenticated={false}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
