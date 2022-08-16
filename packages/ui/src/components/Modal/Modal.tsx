import * as React from "react";
import classnames from "classnames";
import css from "./Modal.module.scss";

export interface ModalProps {
  children?: React.ReactNode;
}

export function Modal(props: ModalProps) {
  return (
    <div className={classnames(css.Modal)}>
      <p>Modal component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Modal.displayName = "Modal";
