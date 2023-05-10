import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCoffeeOffOutline = (
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
    <path d="m2 3.27 2 2V13c0 2.21 1.79 4 4 4h6c.5 0 1-.11 1.44-.29L17.73 19H2v2h17.73l.99 1L22 20.72 3.27 2 2 3.27M8 15c-1.1 0-2-.9-2-2V7.27L13.73 15H8M20 3H6.81l2 2H16v7.19l1.85 1.85c.09-.34.15-.68.15-1.04v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2v3Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCoffeeOffOutline);
const Memo = memo(ForwardRef);
export default Memo;
