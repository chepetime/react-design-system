import * as React from "react";
import classnames from "classnames";
import css from "./Quote.module.scss";

export interface QuoteProps {
  children?: React.ReactNode;
}

export function Quote(props: QuoteProps) {
  return (
    <div {...props} className={classnames(css.Quote)}>
      <p>Quote component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Quote.displayName = "Quote";
