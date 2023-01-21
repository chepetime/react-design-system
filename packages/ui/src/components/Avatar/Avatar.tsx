import * as React from "react";
import classnames from "classnames";
import css from "./Avatar.module.scss";

export interface AvatarProps {
  children?: React.ReactNode;
}

export function Avatar(props: AvatarProps) {
  return (
    <div {...props} className={classnames(css.Avatar)}>
      <p>Avatar component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Avatar.displayName = "Avatar";
