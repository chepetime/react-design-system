import React from "react";
import classnames from "classnames";
import css from "./Command.module.scss";

export interface CommandProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  (props: CommandProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Command)} ref={ref}>
        <p>Command component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Command.displayName = "Command";
