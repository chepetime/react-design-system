import React from "react";
import classnames from "classnames";
import css from "./[componentName](pascalCase).module.scss";

export interface [componentName](pascalCase)Props extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const [componentName](pascalCase) = React.forwardRef<HTMLDivElement, [componentName](pascalCase)Props>(
  (props: [componentName](pascalCase)Props, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.[componentName](pascalCase))} ref={ref}>
        <p>[componentName](pascalCase) component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

[componentName](pascalCase).displayName = "[componentName](pascalCase)";
