import React from "react";
import classnames from "classnames";
import css from "./Message.module.scss";

export interface MessageProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  (props: MessageProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Message)} ref={ref}>
        <p>Message component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Message.displayName = "Message";
