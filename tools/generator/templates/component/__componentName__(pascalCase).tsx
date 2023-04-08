import React from "react";
import classnames from "classnames";
import css from "./__componentName__(pascalCase).module.scss";

export interface __componentName__(pascalCase)Props {
  children?: React.ReactNode;
}

export const __componentName__(pascalCase) = React.forwardRef<HTMLDivElement, __componentName__(pascalCase)Props>(
  (props: __componentName__(pascalCase)Props, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.__componentName__(pascalCase))} ref={ref}>
        <p>__componentName__(pascalCase) component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

__componentName__(pascalCase).displayName = "__componentName__(pascalCase)";
