import React from "react";
import {BrowserRouter} from 'react-router-dom';
import TestRenderer from "react-test-renderer";
import Header from "./header";
import * as mock from "test-mock";


test(`render Header`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter >
          <Header
            id={mock.ID}
            noAvatar={true}
            title={mock.TITLE}
            movieTitle={mock.TITLE}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
