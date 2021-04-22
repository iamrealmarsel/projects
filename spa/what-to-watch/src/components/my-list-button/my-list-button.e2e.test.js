import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MyListButton} from "./my-list-button";
import * as mock from "test-mock";


configure({adapter: new Adapter()});

test(`click on my list button`, () => {
  const changeMyListAction = jest.fn();

  const wrapper = shallow(
      <MyListButton
        changeMyListAction={changeMyListAction}
        movie={mock.MOVIE}
      />
  );

  wrapper.simulate(`click`);
  expect(changeMyListAction).toHaveBeenCalledTimes(1);
});
