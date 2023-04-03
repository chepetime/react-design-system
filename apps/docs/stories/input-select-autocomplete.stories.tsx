/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  InputSelectAutocomplete,
  InputSelectAutocompleteProps,
} from "@chepe/ui/src";

export default {
  title: "Form/InputSelectAutocomplete",
  component: InputSelectAutocomplete,
  tags: ["autodocs"],
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
