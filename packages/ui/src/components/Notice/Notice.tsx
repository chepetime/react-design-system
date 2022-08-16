import * as React from "react";
import classnames from "classnames";
import css from "./Notice.module.scss";

export interface NoticeProps {
  children?: React.ReactNode;
}

export function Notice(props: NoticeProps) {
  return (
    <div className={classnames(css.Notice)}>
      <p>Notice component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Notice.displayName = "Notice";
