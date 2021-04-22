import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RatingStars from "./rating-stars";
import * as mock from "test-mock";


configure({adapter: new Adapter()});

test(`click to rating stars`, () => {
  const handleStarClick = jest.fn();

  const wrapper = shallow(
      <RatingStars
        index={mock.ID}
        starCheck={true}
        onStarClick={handleStarClick}
      />
  );

  const input = wrapper.find(`.rating__input`);
  input.simulate(`change`, {
    target: {
      checked: true
    }});
  expect(handleStarClick).toHaveBeenCalledTimes(1);
});
