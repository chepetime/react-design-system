import * as React from "react";
import classnames from "classnames";
import css from "./Audio.module.scss";

export interface AudioProps {
  children?: React.ReactNode;
}

export const Audio = React.forwardRef<HTMLDivElement, AudioProps>(
  (props: AudioProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Audio)} ref={ref}>
        <p>Audio component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Audio.displayName = "Audio";
