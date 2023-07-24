import React from "react";
import classnames from "classnames";
import css from "./CommandMenu.module.scss";

export interface CommandMenuProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const CommandMenu = React.forwardRef<HTMLDivElement, CommandMenuProps>(
  (props: CommandMenuProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.CommandMenu)} ref={ref}>
        <p>CommandMenu component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

CommandMenu.displayName = "CommandMenu";
