import React from "react";
import classnames from "classnames";
import css from "./Banner.module.scss";

export interface BannerProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (props: BannerProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Banner)} ref={ref}>
        <p>Banner component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Banner.displayName = "Banner";
