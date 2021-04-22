import React from "react";
import TestRenderer from "react-test-renderer";
import Footer from "./footer";


test(`render Footer`, () => {
  const tree = TestRenderer
    .create(
        <Footer/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
