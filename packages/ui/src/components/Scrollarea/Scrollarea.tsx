import React from "react";
import classnames from "classnames";
import css from "./Scrollarea.module.scss";

export interface ScrollareaProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Scrollarea = React.forwardRef<HTMLDivElement, ScrollareaProps>(
  (props: ScrollareaProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Scrollarea)} ref={ref}>
        <p>Scrollarea component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Scrollarea.displayName = "Scrollarea";
