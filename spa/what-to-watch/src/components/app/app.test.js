import React from "react";
import TestRenderer from "react-test-renderer";
import {App} from "./app";
import * as mock from "test-mock";


test(`render App`, () => {
  const tree = TestRenderer
    .create(
        <App
          initAction={mock.noop}
          isApplicationReady={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
