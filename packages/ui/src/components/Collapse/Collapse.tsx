import React, { useEffect } from "react";
import classnames from "classnames";
import css from "./Collapse.module.scss";

export interface CollapseProps {
  isOpen?: boolean;
  label: string;
  children: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({
  isOpen = false,
  label,
  children,
}) => {
  const [isOpenState, setIsOpenState] = React.useState(isOpen);

  const toggleOpen = () => {
    setIsOpenState(!isOpenState);
  };

  useEffect(() => {
    setIsOpenState((current) => (current !== isOpen ? isOpen : current));
  }, [isOpen]);

  return (
    <div className={css.Collapse}>
      <button
        className={classnames(css.ToggleButton, { [css.isOpen]: isOpenState })}
        onClick={toggleOpen}
        aria-expanded={isOpenState}
        aria-controls={`collapse-${label}`}
      >
        {label}
        <span aria-hidden>+</span>
      </button>
      <div
        className={classnames(css.Content, { [css.isOpen]: isOpenState })}
        id={`collapse-${label}`}
      >
        {children}
      </div>
    </div>
  );
};

Collapse.displayName = "Collapse"; // sets the component's display name to "Collapse" for debugging purposes
