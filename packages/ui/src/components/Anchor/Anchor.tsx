import * as React from "react";
import classnames from "classnames";
import css from "./Anchor.module.scss";

export interface AnchorProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  children?: React.ReactNode;
}

export const Anchor: React.FC<AnchorProps> = ({
  href,
  target = "_self",
  className,
  children,
  ...props
}) => {
  return (
    <a
      href={href}
      target={target}
      {...props}
      className={classnames(css.Anchor, className)}
    >
      {children || href}
    </a>
  );
};

Anchor.displayName = "Anchor";
