import React from "react";
import TestRenderer from "react-test-renderer";
import {GenreList} from "./genre-list";
import * as mock from "test-mock";


test(`render GenreList`, () => {
  const tree = TestRenderer
    .create(
        <GenreList
          changeGenreAction={mock.noop}
          currentGenre={mock.CURRENT_GENRE}
          genres={mock.GENRES}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
