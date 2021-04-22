import React from "react";
import TestRenderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {PrivateRouting} from "./private-routing";
import * as mock from "test-mock";


test(`render PrivateRouting`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter>
          <PrivateRouting
            render={mock.noop}
            isAuthenticated={false}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
