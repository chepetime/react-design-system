import * as React from "react";
import classnames from "classnames";
import css from "./Tabs.module.scss";

export interface TabsProps {
  hasBackground?: boolean;
  hasUnderline?: boolean;
  direction?: "horizontal" | "vertical";
  children?: React.ReactNode;
}

// Some inspiration from here
// https://floatui.com/components/tabs
// Props-wise it's cool!

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (props: TabsProps, ref: React.Ref<HTMLDivElement>) => {
    const [selectedItem, setSelectedItem] = React.useState<string>("");

    React.useEffect(() => {
      const allIds = React.Children.map(props.children, (child) => {
        const item = child as React.ReactElement<
          React.PropsWithChildren<TabElementProps>
        >;

        return `${item?.props?.id}`;
      }) || [""];

      if (!allIds?.includes(selectedItem)) {
        setSelectedItem(allIds[0]);
      }
    }, [props.children, selectedItem]);

    return (
      <div>
        <div className={classnames(css.Tabs)} ref={ref}>
          <div
            role="tablist"
            className={classnames(css.TabsList)}
            aria-busy="true"
          >
            {React.Children.map(props.children, (child) => {
              const item = child as React.ReactElement<
                React.PropsWithChildren<TabElementProps>
              >;

              const id = `${item?.props?.id}`;
              const isActive = selectedItem === id;
              const onClick = () => {
                setSelectedItem(id);
                item.props.onClick?.();
              };

              return (
                <div
                  key={id}
                  className={classnames(css.TabsList__Element, {
                    [css["TabsList__Element--selected"]]: isActive,
                  })}
                >
                  {React.cloneElement(item, {
                    id,
                    isActive,
                    onClick,
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

Tabs.displayName = "Tabs";

export interface TabElementProps {
  id?: string;
  isActive?: boolean;
  children?: React.ReactNode;
  onClick?: (id?: string) => void;
}

export const TabElement = React.forwardRef<HTMLButtonElement, TabElementProps>(
  (
    {
      id = "",
      isActive = false,
      onClick: handleOnClick,
      children,
      ...props
    }: TabElementProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        aria-controls={id}
        className={classnames(css.TabsList__Button, { isActive })}
        onClick={() => handleOnClick && handleOnClick(id)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabElement.displayName = "TabElement";
