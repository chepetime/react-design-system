import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapMinus = (
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
    <path d="M15 18v2h8v-2h-8m-1.84 2.36L9 18.9l-5.34 2.07c-.06.03-.11.03-.16.03-.28 0-.5-.22-.5-.5V5.38c0-.23.16-.41.36-.48L9 3l6 2.1L20.34 3h.16c.28 0 .5.22.5.5v9.85a5.93 5.93 0 0 0-6 1.19V7.1L9 5v11.9l4.04 1.42c-.04.22-.04.45-.04.68 0 .47.06.92.16 1.36Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMapMinus);
const Memo = memo(ForwardRef);
export default Memo;
