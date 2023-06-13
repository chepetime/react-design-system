import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodeParentheses = (
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
    <path d="M17.62 3C19.13 5.27 20 8.55 20 12c0 3.44-.87 6.72-2.38 9L16 19.96c1.26-1.89 2-4.83 2-7.96s-.74-6.08-2-7.97L17.62 3M6.38 3 8 4.04C6.74 5.92 6 8.87 6 12s.74 6.08 2 7.96L6.38 21C4.87 18.73 4 15.45 4 12s.87-6.73 2.38-9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeParentheses);
const Memo = memo(ForwardRef);
export default Memo;
