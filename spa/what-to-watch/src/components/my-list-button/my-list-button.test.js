import React from "react";
import TestRenderer from "react-test-renderer";
import {MyListButton} from "./my-list-button";
import * as mock from "test-mock";


test(`render MyListButton`, () => {
  const tree = TestRenderer
    .create(
        <MyListButton
          changeMyListAction={mock.noop}
          movie={mock.MOVIE}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
