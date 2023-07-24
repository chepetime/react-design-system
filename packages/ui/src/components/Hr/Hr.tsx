import React from "react";
import classnames from "classnames";
import css from "./Hr.module.scss";

export interface HrProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Hr = React.forwardRef<HTMLDivElement, HrProps>(
  (props: HrProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Hr)} ref={ref}>
        <p>Hr component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Hr.displayName = "Hr";
