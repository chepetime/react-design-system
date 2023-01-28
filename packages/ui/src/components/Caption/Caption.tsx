import * as React from "react";
import classnames from "classnames";
import css from "./Caption.module.scss";

export interface CaptionProps {
  children?: React.ReactNode;
}

export const Caption = React.forwardRef<HTMLDivElement, CaptionProps>(
  (props: CaptionProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Caption)} ref={ref}>
        <p>Caption component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Caption.displayName = "Caption";
