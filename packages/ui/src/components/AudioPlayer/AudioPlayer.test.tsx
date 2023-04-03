import React from "react";
import { render } from "@testing-library/react";
import { AudioPlayer } from "./AudioPlayer";

describe("AudioPlayer", () => {
  test("renders the Audio component", () => {
    render(
      <AudioPlayer src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3" />
    );
  });
});
