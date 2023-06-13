import React from "react";
import classnames from "classnames";
import css from "./Modal.module.scss";

export interface ModalProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (props: ModalProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Modal)} ref={ref}>
        <p>Modal component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Modal.displayName = "Modal";
