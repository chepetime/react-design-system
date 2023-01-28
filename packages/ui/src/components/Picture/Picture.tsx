import * as React from "react";
import classnames from "classnames";
import css from "./Picture.module.scss";

export interface PictureProps {
  children?: React.ReactNode;
}

export const Picture = React.forwardRef<HTMLDivElement, PictureProps>(
  (props: PictureProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Picture)} ref={ref}>
        <p>Picture component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Picture.displayName = "Picture";
