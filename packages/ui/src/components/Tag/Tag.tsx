import React from "react";
import classnames from "classnames";
import css from "./Tag.module.scss";

export interface TagProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (props: TagProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Tag)} ref={ref}>
        <p>Tag component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Tag.displayName = "Tag";
