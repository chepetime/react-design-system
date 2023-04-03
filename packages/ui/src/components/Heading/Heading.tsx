import React from "react";
import classnames from "classnames";
import css from "./Heading.module.scss";
import { HeadingProps } from "./Heading.types";

const HeadingComponent = (
  { as: Type = "h1", styleAs, ...props }: HeadingProps,
  ref: React.Ref<HTMLHeadingElement>
) => {
  return (
    <Type
      className={classnames(
        css["Heading"],
        css[`${styleAs || Type}`],
        props.className
      )}
      style={props.style}
      ref={ref}
    >
      {props.children}
    </Type>
  );
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  HeadingComponent
);

Heading.displayName = "Heading";
