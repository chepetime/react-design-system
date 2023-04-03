import React from "react";
import classnames from "classnames";
import css from "./Badge.module.scss";

export interface BadgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  color = "#ffffff",
  backgroundColor = "#007bff",
  onClick,
  ...props
}) => {
  const badgeClasses = classnames(css.Badge, className);
  const badgeStyle = {
    color,
    backgroundColor,
  };

  return (
    <button
      type="button"
      className={badgeClasses}
      style={badgeStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
