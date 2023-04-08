import isChromatic from "chromatic/isChromatic";
import React from "react";

function GlobalDecorator(props) {
  return (
    <div
      {...props}
      style={{
        padding: "2rem",
      }}
    >
      <div>{props.children}</div>
    </div>
  );
}

function Flex(props) {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        padding: "2rem",
        flex: 1,
      }}
    >
      <div>{props.children}</div>
    </div>
  );
}

export function withColorScheme(Story, context) {
  let { scheme } = context.globals;

  if (isChromatic()) {
    scheme = "both";
  }

  if (scheme === "light" || scheme === "dark" || scheme === "fireworks") {
    return (
      <Flex className={`color-scheme--${scheme} ${scheme}`} data-theme={scheme}>
        <Story />
      </Flex>
    );
  }

  if (scheme === "none") {
    return (
      <GlobalDecorator>
        <Story />
      </GlobalDecorator>
    );
  }

  return (
    <>
      <Flex className="color-scheme--light light" data-theme="light">
        <Story />
      </Flex>

      <Flex className="color-scheme--dark dark" data-theme="dark">
        <Story />
      </Flex>
    </>
  );
}
