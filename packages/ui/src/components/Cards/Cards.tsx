import * as React from "react";
import classnames from "classnames";
import css from "./Cards.module.scss";

export interface CardsProps {
  children?: React.ReactNode;
}

export const Cards = React.forwardRef<HTMLDivElement, CardsProps>(
  (props: CardsProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Cards)} ref={ref}>
        <p>Cards component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Cards.displayName = "Cards";
