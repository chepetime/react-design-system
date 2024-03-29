import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCoffeeOutline = (
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
    <path d="M2 21v-2h18v2H2M20 8V5h-2v3h2m0-5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V3h16m-4 2H6v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCoffeeOutline);
const Memo = memo(ForwardRef);
export default Memo;
