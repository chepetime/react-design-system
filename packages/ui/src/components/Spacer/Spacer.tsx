import * as React from "react";
import classnames from "classnames";
import css from "./Spacer.module.scss";

export interface SpacerProps {
  children?: React.ReactNode;
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (props: SpacerProps, ref: React.Ref<HTMLDivElement>) => {
    return <div {...props} className={classnames(css.Spacer)} ref={ref} />;
  }
);

Spacer.displayName = "Spacer";
