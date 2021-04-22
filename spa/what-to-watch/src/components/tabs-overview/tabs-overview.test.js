import React from "react";
import TestRenderer from "react-test-renderer";
import TabsOverview from "./tabs-overview";
import * as mock from "test-mock";


test(`render TabsOverview`, () => {
  const tree = TestRenderer
    .create(
        <TabsOverview
          movie={mock.MOVIE}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
