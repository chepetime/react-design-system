/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export type As<Props = any> = React.ElementType<Props>;

export type PropsWithAs<Props = any, Type extends As = As> = Props &
  Omit<React.ComponentProps<Type>, "as" | keyof Props> & {
    as?: Type;
  };

export interface ComponentWithAs<Props, DefaultType extends As> {
  <Type extends As>(
    props: PropsWithAs<Props, Type> & { as: Type }
  ): JSX.Element;
  (props: PropsWithAs<Props, DefaultType>): JSX.Element;
}

type ReactRef<T> =
  | React.Ref<T>
  | React.RefObject<T>
  | React.MutableRefObject<T>;

export function setRef<T = any>(ref: React.Ref<T> = null, value: T): void {
  if (!ref) {
    return;
  }

  if (typeof ref === "function") {
    ref(value);
  } else {
    // eslint-disable-next-line no-param-reassign
    (ref as React.MutableRefObject<T>).current = value;
  }
}

export function assignRef(
  ref: React.Ref<HTMLElement>,
  value: HTMLElement | null
): ReturnType<typeof setRef> {
  if (ref == null || value == null) {
    return;
  }

  try {
    setRef(ref, value);
  } catch (error) {
    throw new Error("Cannot assign value to ref");
  }
}

/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */
export function mergeRefs(...refs: Array<ReactRef<HTMLElement> | undefined>) {
  return (value: HTMLElement | null) => {
    refs.forEach((ref) => ref && assignRef(ref, value));
  };
}

export function forwardRefWithAs<Props, DefaultType extends As>(
  component: React.ForwardRefRenderFunction<any, any>
): ComponentWithAs<Props, DefaultType> {
  return React.forwardRef(component) as unknown as ComponentWithAs<
    Props,
    DefaultType
  >;
}
