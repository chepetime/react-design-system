import React from "react";
import classnames from "classnames";
import css from "./Text.module.scss";

export interface TextProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Text = React.forwardRef<HTMLDivElement, TextProps>(
  (props: TextProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Text)} ref={ref}>
        <p>Text component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Text.displayName = "Text";
