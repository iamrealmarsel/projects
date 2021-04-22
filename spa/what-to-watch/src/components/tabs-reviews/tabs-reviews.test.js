import React from "react";
import TestRenderer from "react-test-renderer";
import TabsReviews from "./tabs-reviews";
import * as mock from "test-mock";


test(`render TabsReviews`, () => {
  const tree = TestRenderer
    .create(
        <TabsReviews
          reviews={mock.REVIEWS}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
