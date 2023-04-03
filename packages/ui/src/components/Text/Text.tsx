import * as React from "react";
import classnames from "classnames";
import css from "./Text.module.scss";
import { TextProps } from "./Text.types";

export const Text = React.forwardRef<HTMLDivElement, TextProps>(
  (props: TextProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <p className={classnames(css.Text)} style={props.style} ref={ref}>
        {props.children}
      </p>
    );
  }
);

Text.displayName = "Text";
