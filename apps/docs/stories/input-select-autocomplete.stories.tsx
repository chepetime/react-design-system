import React from "react";
import {
  InputSelectAutocomplete,
  InputSelectAutocompleteProps,
} from "@chepe/ui/src";

export default {
  title: "Components/InputSelectAutocomplete",
  component: InputSelectAutocomplete,
};

export const Default = {
  render: (args: InputSelectAutocompleteProps) => <InputSelectAutocomplete />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
