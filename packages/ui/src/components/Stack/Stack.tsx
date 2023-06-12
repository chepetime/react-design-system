import React from "react";
import classnames from "classnames";
import css from "./Stack.module.scss";

/**
 * The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.
 * It can be used to create both horizontal and vertical layouts.
 * The children elements are automatically spaced apart based on the provided space prop.
 * If the divider prop is provided, a divider will be placed between each child.
 */
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The spacing between children */
  spacing?: number;
  /** The divider between children */
  divider?: React.ReactNode;
  /** Whether the Stack is horizontal or vertical */
  horizontal?: boolean;
}

export const Stack: React.FC<StackProps> = ({
  spacing = 0,
  divider = null,
  horizontal = false,
  className,
  children,
  ...props
}) => {
  const stackClasses = classnames(css.Stack, className, {
    [css.horizontal]: horizontal,
  });

  const modifiedChildren = React.Children.toArray(children)
    .filter((child) => child) // Remove null or undefined children
    .reduce<React.ReactNode[]>((acc, child, index, arr) => {
      const nextChild = arr[index + 1];
      acc.push(child);
      if (nextChild && divider) {
        acc.push(
          <div key={`${index}-divider`} className={css.divider}>
            {divider}
          </div>
        );
      }
      return acc;
    }, []);

  return (
    <div {...props} className={stackClasses} style={{ gap: spacing }}>
      {modifiedChildren}
    </div>
  );
};

Stack.displayName = "Stack";
