import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCoffeeToGoOutline = (
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
    <path d="M3 3v8a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1h2c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2H3m2 2h8v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5m10 0h2v3h-2V5m1.67 8.83-1.41 1.41L17 17H3v2h14l-1.74 1.76 1.41 1.41L20.84 18l-4.17-4.17Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCoffeeToGoOutline);
const Memo = memo(ForwardRef);
export default Memo;
