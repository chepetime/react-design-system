import * as React from "react";
import classnames from "classnames";
import css from "./Page.module.scss";

export interface PageProps {
  children?: React.ReactNode;
}

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
  (props: PageProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Page)} ref={ref}>
        {props.children}
      </div>
    );
  }
);

Page.displayName = "Page";
