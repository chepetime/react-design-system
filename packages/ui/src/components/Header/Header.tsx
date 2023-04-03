import * as React from "react";
import classnames from "classnames";
import css from "./Header.module.scss";

export interface HeaderProps {
  logo: React.ReactNode;
  navLinks: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  navLinks,
  className,
}) => {
  return (
    <header className={classnames(css.Header, className)}>
      <div className={css.Logo}>{logo}</div>
      <nav className={css.NavLinks}>{navLinks}</nav>
    </header>
  );
};

Header.displayName = "Header";
