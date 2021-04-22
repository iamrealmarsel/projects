import React from "react";
import TestRenderer from "react-test-renderer";
import RatingStars from "./rating-stars";
import * as mock from "test-mock";


test(`render RatingStars`, () => {
  const tree = TestRenderer
    .create(
        <RatingStars
          index={mock.ID}
          starCheck={true}
          onStarClick={mock.noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
