import * as React from "react";
import classnames from "classnames";
import css from "./Picture.module.scss";

export interface PictureProps {
  children?: React.ReactNode;
}

export function Picture(props: PictureProps) {
  return (
    <div className={classnames(css.Picture)}>
      <p>Picture component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Picture.displayName = "Picture";
