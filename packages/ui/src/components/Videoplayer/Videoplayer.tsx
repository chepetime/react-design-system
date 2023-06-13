import React from "react";
import classnames from "classnames";
import css from "./Videoplayer.module.scss";

export interface VideoplayerProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Videoplayer = React.forwardRef<HTMLDivElement, VideoplayerProps>(
  (props: VideoplayerProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Videoplayer)} ref={ref}>
        <p>Videoplayer component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Videoplayer.displayName = "Videoplayer";
