import React from "react";
import TestRenderer from "react-test-renderer";
import TabsDetails from "./tabs-details";
import * as mock from "test-mock";


test(`render TabsDetails`, () => {
  const tree = TestRenderer
    .create(
        <TabsDetails
          movie={mock.MOVIE}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
