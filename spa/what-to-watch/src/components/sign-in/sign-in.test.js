import React from "react";
import TestRenderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from "./sign-in";
import * as mock from "test-mock";


test(`render SignIn`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter>
          <SignIn
            loginAction={mock.noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
