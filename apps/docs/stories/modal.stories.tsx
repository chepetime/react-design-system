/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Modal, ModalProps } from "@chepe/ui/src";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: ModalProps) => <Modal>{args.children}</Modal>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
