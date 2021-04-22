import React from "react";
import {BrowserRouter} from 'react-router-dom';
import TestRenderer from "react-test-renderer";
import {Avatar} from "./avatar";
import * as mock from "test-mock";


test(`render Avatar`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter >
          <Avatar
            isAuthenticated={false}
            avatarLink={mock.PREVIEW}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
