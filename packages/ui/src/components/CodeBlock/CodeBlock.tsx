import * as React from "react";
import classnames from "classnames";
import css from "./CodeBlock.module.scss";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export interface CodeBlockProps {
  language?: string;
  children?: React.ReactNode;
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    { language = "", children }: CodeBlockProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div className={classnames(css.CodeBlock)} ref={ref}>
        <SyntaxHighlighter language={language} style={dracula} PreTag="div">
          {String(children)}
        </SyntaxHighlighter>
        {language && <span className={css.Language}>{language}</span>}
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";
