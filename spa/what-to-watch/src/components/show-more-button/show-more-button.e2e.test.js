import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";


configure({adapter: new Adapter()});

test(`click on show more button`, () => {
  const handleClick = jest.fn();

  const wrapper = shallow(
      <ShowMoreButton
        onButtonClick={handleClick}
      />
  );

  const button = wrapper.find(`.catalog__button`);
  button.simulate(`click`);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
