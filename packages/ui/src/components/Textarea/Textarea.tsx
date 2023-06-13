import React from "react";
import classnames from "classnames";
import css from "./Textarea.module.scss";

export interface TextareaProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Textarea = React.forwardRef<HTMLDivElement, TextareaProps>(
  (props: TextareaProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Textarea)} ref={ref}>
        <p>Textarea component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Textarea.displayName = "Textarea";
