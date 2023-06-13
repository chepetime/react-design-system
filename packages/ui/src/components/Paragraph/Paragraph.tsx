import React from "react";
import classnames from "classnames";
import css from "./Paragraph.module.scss";

export interface ParagraphProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Paragraph = React.forwardRef<HTMLDivElement, ParagraphProps>(
  (props: ParagraphProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Paragraph)} ref={ref}>
        <p>Paragraph component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Paragraph.displayName = "Paragraph";
