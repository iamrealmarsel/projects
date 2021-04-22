import React from "react";
import TestRenderer from "react-test-renderer";
import {Player} from "./player";
import * as mock from "test-mock";


test(`render Player`, () => {
  const tree = TestRenderer
    .create(
        <Player
          movies={mock.MOVIES}
          params={mock.PARAMS}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
