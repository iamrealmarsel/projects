import React from "react";
import TestRenderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Promo} from "./promo";
import * as mock from "test-mock";


test(`render Promo`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <Promo
              moviePromo={mock.MOVIE}
              isAuthenticated={false}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
