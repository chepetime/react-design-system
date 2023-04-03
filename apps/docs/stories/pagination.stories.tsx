import React, { useState } from "react";
import { Pagination, PaginationProps } from "@chepe/ui/src";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    onPageChange: {
      control: false,
    },
  },
};

export const Default = {
  render: (args: PaginationProps) => <Pagination {...args} />,
  args: {
    totalPages: 5,
    currentPage: 1,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};

function ControledTemplate(args: PaginationProps) {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      {...args}
      currentPage={page}
      onPageChange={(page) => setPage(page)}
    />
  );
}

export const Controled = {
  render: ControledTemplate,
  args: {
    totalPages: 5,
  },
  argTypes: {
    currentPage: {
      control: false,
    },
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
