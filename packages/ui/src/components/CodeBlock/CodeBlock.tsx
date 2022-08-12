import * as React from "react";
import classnames from "classnames";
import css from "./CodeBlock.module.scss";

export interface CodeBlockProps {
  children?: React.ReactNode;
}

export function CodeBlock(props: CodeBlockProps) {
  return (
    <div className={classnames(css.CodeBlock)}>
      <p>CodeBlock component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

CodeBlock.displayName = "CodeBlock";
