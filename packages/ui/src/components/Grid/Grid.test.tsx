import React from "react";
import { render } from "@testing-library/react";
import { Grid } from "./Grid";

describe("Grid", () => {
  test("renders the Grid component", () => {
    render(
      <Grid columns={2} rows={2} gap={8}>
        <div>Grid item 1</div>
        <div>Grid item 2</div>
        <div>Grid item 3</div>
        <div>Grid item 4</div>
      </Grid>
    );
  });
});
