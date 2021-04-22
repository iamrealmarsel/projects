import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenreList} from "./genre-list";
import * as mock from "test-mock";


configure({adapter: new Adapter()});

it(`click to genre`, () => {
  const changeGenreAction = jest.fn();

  const wrapper = shallow(
      <GenreList
        changeGenreAction={changeGenreAction}
        currentGenre={mock.ALL_GENRES}
        genres={mock.GENRES}
      />
  );

  const link = wrapper.find(`.catalog__genres-link`).at(0);
  link.simulate(`click`, {preventDefault: mock.noop});
  expect(changeGenreAction).toHaveBeenCalledTimes(1);
});
