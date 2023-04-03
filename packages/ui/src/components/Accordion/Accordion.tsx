import React, { useState, useCallback } from "react";
import classnames from "classnames";
import css from "./Accordion.module.scss";

export interface AccordionProps {
  toggle?: boolean;
  open?: number[];
  children?: React.ReactElement[] | React.ReactElement;
}

/* Accordion */

export const AccordionComponent = (
  { toggle = true, open = [], children }: AccordionProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const [currentlyOpen, setCurrentlyOpen] = useState<number[]>(open);

  /**
   * Handle click in toggle button
   * @param i Index of the clicked DexAccordion
   */
  const handleClick = useCallback(
    (i: number) => {
      setCurrentlyOpen((current: number[]) => {
        if (currentlyOpen.indexOf(i) !== -1) {
          return current.filter((e) => e !== i);
        } else if (toggle) {
          return [i];
        } else {
          return [...current, i];
        }
      });
    },
    [currentlyOpen, toggle]
  );

  return (
    <div className={classnames(css.Accordion)} ref={ref}>
      {children &&
        React.Children.map(
          children,
          (child: React.ReactElement, index: number) =>
            React.cloneElement(child, {
              index,
              onClick: () => handleClick(index),
              isOpen: currentlyOpen.includes(index),
              ...child.props,
            })
        )}
    </div>
  );
};

export const Accordion = React.forwardRef<HTMLHeadingElement, AccordionProps>(
  AccordionComponent
);

Accordion.displayName = "Accordion";

/* Accordion Root */

export const AccordionItem = ({
  children,
  ...props
}: {
  index?: number;
  isOpen?: boolean;
  children?: React.ReactElement[] | React.ReactElement;
}) => {
  return (
    <div className={css.AccordionItem}>
      {children &&
        React.Children.map(children, (child: React.ReactElement) =>
          React.cloneElement(child, {
            ...props,
            ...child.props,
          })
        )}
    </div>
  );
};

export const AccordionTrigger = (props: {
  isOpen: false;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  customClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className={css.AccordionHeader}>
      <button
        className={classnames(css.AccordionTrigger, {
          [css["AccordionTrigger--isOpen"]]: props.isOpen,
        })}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export const AccordionContent = (props: {
  isOpen?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <div className={classnames(css.AccordionContent)}>
      {props.isOpen && (
        <div className={classnames(css.AccordionContentText)}>
          {props.children}
        </div>
      )}
    </div>
  );
};
