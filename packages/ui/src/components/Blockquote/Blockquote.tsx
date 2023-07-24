import React from "react";
import classnames from "classnames";
import css from "./Blockquote.module.scss";

export interface BlockquoteProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Blockquote = React.forwardRef<HTMLDivElement, BlockquoteProps>(
  (props: BlockquoteProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Blockquote)} ref={ref}>
        <p>Blockquote component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Blockquote.displayName = "Blockquote";
