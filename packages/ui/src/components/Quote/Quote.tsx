import * as React from "react";
import classnames from "classnames";
import css from "./Quote.module.scss";

export interface QuoteProps {
  author?: string;
  children?: React.ReactNode;
}

export const Quote = React.forwardRef<HTMLQuoteElement, QuoteProps>(
  (props: QuoteProps, ref: React.Ref<HTMLQuoteElement>) => {
    return (
      <figure className={classnames(css.Figure)}>
        <blockquote className={classnames(css.Quote)} ref={ref}>
          <p>{props.children}</p>
        </blockquote>
        {props.author && (
          <figcaption className={classnames(css.Author)}>
            — {props.author}
          </figcaption>
        )}
      </figure>
    );
  }
);

Quote.displayName = "Quote";
