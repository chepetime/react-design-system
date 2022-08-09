import * as React from "react";

export interface __componentName__(pascalCase)Props {
  children?: React.ReactNode;
}

export function __componentName__(pascalCase)(props: __componentName__(pascalCase)Props) {
  return (
    <div>
      <p>__componentName__(pascalCase)</p>
      <div>{props.children}</div>
    </div>
  );
}

__componentName__(pascalCase).displayName = "__componentName__(pascalCase)";
