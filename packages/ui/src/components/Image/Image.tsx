import React from "react";
import classnames from "classnames";
import css from "./Image.module.scss";

export interface ImageProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Image = React.forwardRef<HTMLDivElement, ImageProps>(
  (props: ImageProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Image)} ref={ref}>
        <p>Image component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Image.displayName = "Image";
