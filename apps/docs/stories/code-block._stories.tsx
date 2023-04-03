/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { CodeBlock, CodeBlockProps } from "@chepe/ui/src";

export default {
  title: "Components/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: CodeBlockProps) => <CodeBlock {...args} />,
  args: {
    children: `
import React from "react";
import { Button } from "@chepe/ui";
import { Jellyfish } from "@chepe/icons";

function App() {
  return (
    <div>
      <Button>
        <Jellyfish /> Hi
      </Button>
    </div>
  );
}

export default App;
    `.trim(),
    language: "javascript",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
