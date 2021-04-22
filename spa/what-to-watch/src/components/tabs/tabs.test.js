import React from "react";
import TestRenderer from "react-test-renderer";
import {Tabs} from "./tabs";
import * as mock from "test-mock";


test(`render Tabs`, () => {
  const tree = TestRenderer
    .create(
        <Tabs
          movie={mock.MOVIE}
          onTabClick={mock.noop}
          tab={mock.TAB}
          fetchCommentsAction={mock.noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
