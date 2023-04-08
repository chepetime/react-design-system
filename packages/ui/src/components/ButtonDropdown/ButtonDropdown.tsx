import * as React from "react";
import { useState } from "react";
import classnames from "classnames";

import { useOnClickOutside } from "./../../hooks/useOnClickOutside";

import css from "./ButtonDropdown.module.scss";

import { Button } from "./../Button/Button";

export interface ButtonDropdownProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

export const ButtonDropdown: React.FC<ButtonDropdownProps> = ({
  label,
  className,
  children,
}) => {
  const ref = React.useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((current) => !current);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div className={classnames(css.ButtonDropdown, className)} ref={ref}>
      <Button onClick={handleToggle}>
        {label}
        <span className={css.ToggleIcon} aria-hidden>
          ▼
        </span>
      </Button>
      {isOpen && (
        <ul className={css.DropdownMenu}>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            return React.cloneElement(
              child as React.ReactElement<ButtonDropdownItemProps>,
              {
                onClose: () => setIsOpen(false),
              }
            );
          })}
        </ul>
      )}
    </div>
  );
};

export interface ButtonDropdownItemProps {
  onClick?: () => void;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const ButtonDropdownItem: React.FC<ButtonDropdownItemProps> = ({
  onClick,
  children,
  onClose,
}) => {
  const handleClick = () => {
    onClick && onClick();
    onClose && onClose();
  };

  return (
    <li className={css.DropdownItem}>
      <button className={css.DropdownButton} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
};
