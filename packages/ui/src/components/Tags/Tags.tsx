import * as React from "react";
import classnames from "classnames";
import css from "./Tags.module.scss";

export interface TagsProps {
  children?: React.ReactNode;
}

export function Tags(props: TagsProps) {
  return (
    <div className={classnames(css.Tags)}>
      <p>Tags component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Tags.displayName = "Tags";
