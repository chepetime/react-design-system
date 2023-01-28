import * as React from "react";
import classnames from "classnames";
import css from "./Video.module.scss";

export interface VideoProps {
  children?: React.ReactNode;
}

export const Video = React.forwardRef<HTMLDivElement, VideoProps>(
  (props: VideoProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Video)} ref={ref}>
        <p>Video component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Video.displayName = "Video";
