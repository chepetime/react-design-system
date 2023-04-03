import React, { HTMLAttributes } from "react";

import { PropsWithAs } from "./../../lib/react-helpers";
export type HeadingElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type FontSizes =
  | "xs"
  | "sm"
  | "base"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export interface HeadingProps
  extends PropsWithAs,
    HTMLAttributes<HTMLHeadingElement> {
  style?: React.CSSProperties;
  styleAs?: HeadingElements;
  children?: React.ReactNode;
}
