import React from "react";
import classnames from "classnames";
import css from "./Accordion.module.scss";

export interface AccordionProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props: AccordionProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Accordion)} ref={ref}>
        <p>Accordion component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Accordion.displayName = "Accordion";
