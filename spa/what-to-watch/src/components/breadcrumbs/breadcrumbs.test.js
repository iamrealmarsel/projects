import React from "react";
import {BrowserRouter} from 'react-router-dom';
import TestRenderer from "react-test-renderer";
import Breadcrumbs from "./breadcrumbs";
import * as mock from "test-mock";


test(`render Breadcrumbs`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter >
          <Breadcrumbs
            id={mock.ID}
            title={mock.TITLE}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
