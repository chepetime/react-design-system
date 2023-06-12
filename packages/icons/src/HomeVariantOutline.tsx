import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHomeVariantOutline = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path d="M9 13h6v6h3v-9l-6-4.5L6 10v9h3v-6m-5 8V9l8-6 8 6v12H4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeVariantOutline);
const Memo = memo(ForwardRef);
export default Memo;
