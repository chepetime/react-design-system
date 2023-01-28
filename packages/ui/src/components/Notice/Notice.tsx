import * as React from "react";
import classnames from "classnames";
import css from "./Notice.module.scss";

export interface NoticeProps {
  children?: React.ReactNode;
}

export const Notice = React.forwardRef<HTMLDivElement, NoticeProps>(
  (props: NoticeProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Notice)} ref={ref}>
        <p>Notice component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Notice.displayName = "Notice";
