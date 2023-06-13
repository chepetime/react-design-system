import React from "react";
import classnames from "classnames";
import css from "./Anchor.module.scss";

export interface AnchorProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Anchor = React.forwardRef<HTMLDivElement, AnchorProps>(
  (props: AnchorProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Anchor)} ref={ref}>
        <p>Anchor component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Anchor.displayName = "Anchor";
