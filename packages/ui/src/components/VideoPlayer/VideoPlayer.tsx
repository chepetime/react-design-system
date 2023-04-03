import * as React from "react";
import classnames from "classnames";
import css from "./VideoPlayer.module.scss";

export interface VideoPlayerProps extends React.ComponentPropsWithRef<"video"> {
  children?: React.ReactNode;
}

export const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  (props: VideoPlayerProps, ref: React.Ref<HTMLVideoElement>) => {
    return (
      <div>
        <video
          className={classnames(css.VideoPlayer)}
          ref={ref}
          {...props}
          controls
        >
          {props.children}
        </video>
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";
