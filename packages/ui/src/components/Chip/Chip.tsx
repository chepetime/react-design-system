import React from "react";
import classNames from "classnames";
import css from "./Chip.module.scss";

export type ChipType = "primary" | "secondary" | "tertiary";

export interface ChipProps {
  children?: string;
  type?: ChipType;
  className?: string;
  onClick?: () => void;
}

const defaultProps: ChipProps = {
  children: "",
  type: "primary",
};

export const Chip: React.FC<ChipProps> = ({
  children,
  type = "primary",
  className,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={classNames(css.Chip, css[type], className)}
      onClick={handleClick}
      role="button"
    >
      {children}
    </div>
  );
};

Chip.defaultProps = defaultProps;
Chip.displayName = "Chip"; // sets the component's display name to "Chip" for debugging purposes
