import * as React from "react";
import classnames from "classnames";
import css from "./Quote.module.scss";

export interface QuoteProps {
  children?: React.ReactNode;
}

export const Quote = React.forwardRef<HTMLDivElement, QuoteProps>(
  (props: QuoteProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Quote)} ref={ref}>
        <p>Quote component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Quote.displayName = "Quote";
