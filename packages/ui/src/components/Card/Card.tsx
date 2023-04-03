import * as React from "react";
import classnames from "classnames";
import css from "./Card.module.scss";

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={classnames(css.Card, className)}>{children}</div>;
};

Card.displayName = "Card"; // sets the component's display name to "Card" for debugging purposes
