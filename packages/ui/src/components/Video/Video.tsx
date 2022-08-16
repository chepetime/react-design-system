import * as React from "react";
import classnames from "classnames";
import css from "./Video.module.scss";

export interface VideoProps {
  children?: React.ReactNode;
}

export function Video(props: VideoProps) {
  return (
    <div className={classnames(css.Video)}>
      <p>Video component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Video.displayName = "Video";
