/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputSelect, InputSelectProps } from "@chepe/ui/src";
import { Label } from "@chepe/ui/src";

export default {
  title: "Form/InputSelect",
  component: InputSelect,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputSelectProps) => (
    <div>
      <Label for={args.name}>Countries with a cool design Studio</Label>
      <InputSelect name={args.name} id={args.name} {...args} />
    </div>
  ),
  args: {
    label: "countries",
    name: "countries",
    options: [
      { label: "Mexico", value: "mx", disabled: false },
      { label: "United States", value: "us", disabled: false },
      { label: "India", value: "in", disabled: false },
      { label: "Spain", value: "es", disabled: false },
      { label: "Norway", value: "no", disabled: false },
      { label: "Sweden", value: "se", disabled: false },
      { label: "Finland", value: "fi", disabled: false },
      { label: "Hong Kong", value: "hk", disabled: false },
      { label: "United Kingdom", value: "gb", disabled: false },
      { label: "France", value: "fr", disabled: false },
      { label: "Italy", value: "it", disabled: false },
      { label: "Germany", value: "de", disabled: false },
      { label: "China", value: "cn", disabled: false },
      { label: "Singapore", value: "sg", disabled: false },
      { label: "Australia", value: "au", disabled: true }, // Love you Australia, just a demo on disabled options
      { label: "The Netherlands", value: "nl", disabled: false },
    ],
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
