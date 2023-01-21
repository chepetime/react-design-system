import * as React from "react";
import classnames from "classnames";
import css from "./Accordion.module.scss";

export interface AccordionProps {
  children?: React.ReactNode;
}

export function Accordion(props: AccordionProps) {
  return (
    <div {...props} className={classnames(css.Accordion)}>
      <p>Accordion component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Accordion.displayName = "Accordion";
