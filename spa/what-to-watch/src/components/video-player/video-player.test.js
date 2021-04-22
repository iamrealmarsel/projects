import React from "react";
import TestRenderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import * as mock from "test-mock";


test(`render VideoPlayer`, () => {
  const tree = TestRenderer
    .create(
        <VideoPlayer
          preview={mock.PREVIEW}
          previewVideo={mock.PREVIEW_VIDEO}
          title={mock.TITLE}
          isVideo={false}
          playVideo={mock.noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
