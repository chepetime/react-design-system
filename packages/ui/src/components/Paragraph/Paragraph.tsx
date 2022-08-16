import * as React from "react";
import classnames from "classnames";
import css from "./Paragraph.module.scss";

export interface ParagraphProps {
  children?: React.ReactNode;
}

export function Paragraph(props: ParagraphProps) {
  return (
    <div className={classnames(css.Paragraph)}>
      <p>Paragraph component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Paragraph.displayName = "Paragraph";
