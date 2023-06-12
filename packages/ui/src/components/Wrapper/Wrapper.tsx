import * as React from "react";
import classnames from "classnames";
import css from "./Wrapper.module.scss";

export interface WrapperProps {
  children?: React.ReactNode;
}

export const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
  (props: WrapperProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Wrapper)} ref={ref}>
        {props.children}
      </div>
    );
  }
);

Wrapper.displayName = "Wrapper";
