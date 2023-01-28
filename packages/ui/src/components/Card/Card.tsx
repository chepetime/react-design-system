import * as React from "react";
import classnames from "classnames";
import css from "./Card.module.scss";

export interface CardProps {
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props: CardProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Card)} ref={ref}>
        <p>Card component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Card.displayName = "Card";
