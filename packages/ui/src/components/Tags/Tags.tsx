import * as React from "react";
import classnames from "classnames";
import css from "./Tags.module.scss";

export interface TagsProps {
  children?: React.ReactNode;
}

export const Tags = React.forwardRef<HTMLDivElement, TagsProps>(
  (props: TagsProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Tags)} ref={ref}>
        <p>Tags component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Tags.displayName = "Tags";
