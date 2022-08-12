import * as React from "react";
import classnames from "classnames";
import css from "./__componentName__(pascalCase).module.scss";

export interface __componentName__(pascalCase)Props {
  children?: React.ReactNode;
}

export function __componentName__(pascalCase)(props: __componentName__(pascalCase)Props) {
  return (
    <div className={classnames(css.__componentName__(pascalCase))}>
      <p>__componentName__(pascalCase)</p>
      <div>{props.children}</div>
    </div>
  );
}

__componentName__(pascalCase).displayName = "__componentName__(pascalCase)";
