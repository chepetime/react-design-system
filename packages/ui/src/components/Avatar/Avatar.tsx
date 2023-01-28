import * as React from "react";
import classnames from "classnames";
import css from "./Avatar.module.scss";

export interface AvatarProps {
  children?: React.ReactNode;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (props: AvatarProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Avatar)} ref={ref}>
        <p>Avatar component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Avatar.displayName = "Avatar";
