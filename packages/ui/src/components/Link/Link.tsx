import React from "react";
import classnames from "classnames";
import css from "./Link.module.scss";

export interface LinkProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Link = React.forwardRef<HTMLDivElement, LinkProps>(
  (props: LinkProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Link)} ref={ref}>
        <p>Link component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Link.displayName = "Link";
