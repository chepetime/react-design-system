import * as React from "react";
import classnames from "classnames";
import css from "./CodeBlock.module.scss";

export interface CodeBlockProps {
  children?: React.ReactNode;
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (props: CodeBlockProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.CodeBlock)} ref={ref}>
        <p>CodeBlock component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

CodeBlock.displayName = "CodeBlock";
