import * as React from "react";
import classnames from "classnames";
import css from "./Card.module.scss";

export interface CardProps {
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  return (
    <div className={classnames(css.Card)}>
      <p>Card component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Card.displayName = "Card";
