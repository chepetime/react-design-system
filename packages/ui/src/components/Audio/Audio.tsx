import * as React from "react";
import classnames from "classnames";
import css from "./Audio.module.scss";

export interface AudioProps {
  children?: React.ReactNode;
}

export function Audio(props: AudioProps) {
  return (
    <div {...props} className={classnames(css.Audio)}>
      <p>Audio component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Audio.displayName = "Audio";
