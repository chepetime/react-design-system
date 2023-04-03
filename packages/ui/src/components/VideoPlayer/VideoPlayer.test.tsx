import React from "react";
import { render } from "@testing-library/react";
import { VideoPlayer } from "./VideoPlayer";

describe("Video", () => {
  test("renders the Video component", () => {
    render(<VideoPlayer />);
  });
});
