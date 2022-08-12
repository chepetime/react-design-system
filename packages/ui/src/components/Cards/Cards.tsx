import * as React from "react";
import classnames from "classnames";
import css from "./Cards.module.scss";

export interface CardsProps {
  children?: React.ReactNode;
}

export function Cards(props: CardsProps) {
  return (
    <div className={classnames(css.Cards)}>
      <p>Cards component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Cards.displayName = "Cards";
