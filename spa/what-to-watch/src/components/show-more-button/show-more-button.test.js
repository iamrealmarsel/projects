import React from "react";
import TestRenderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";
import * as mock from "test-mock";


test(`render ShowMoreButton`, () => {
  const tree = TestRenderer
    .create(
        <ShowMoreButton
          onButtonClick={mock.noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
