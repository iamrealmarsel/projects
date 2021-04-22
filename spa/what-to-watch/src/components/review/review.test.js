import React from "react";
import TestRenderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Review} from "./review";
import * as mock from "test-mock";


test(`render Review`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <Review
              movies={mock.MOVIES}
              postCommentAction={mock.noop}
              match={mock.MATCH}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
