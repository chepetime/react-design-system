import React from "react";
import classnames from "classnames";
import css from "./AudioPlayer.module.scss";

export interface AudioPlayerProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const AudioPlayer = React.forwardRef<HTMLDivElement, AudioPlayerProps>(
  (props: AudioPlayerProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.AudioPlayer)} ref={ref}>
        <p>AudioPlayer component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

AudioPlayer.displayName = "AudioPlayer";
