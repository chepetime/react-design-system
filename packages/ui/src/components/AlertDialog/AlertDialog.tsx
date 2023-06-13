import React from "react";
import classnames from "classnames";
import css from "./AlertDialog.module.scss";

export interface AlertDialogProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  (props: AlertDialogProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.AlertDialog)} ref={ref}>
        <p>AlertDialog component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

AlertDialog.displayName = "AlertDialog";
