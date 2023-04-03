import * as React from "react";
import classnames from "classnames";
import css from "./ButtonGroup.module.scss";

export interface ButtonGroupProps {
  className?: string;
  children: React.ReactNode;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  children,
}) => {
  const groupClasses = classnames(css.ButtonGroup, className);

  return <div className={groupClasses}>{children}</div>;
};
