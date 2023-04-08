import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgCoffeeToGo = (
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
    <path d="M3 19v-2h14l-1.74-1.76 1.41-1.41L20.84 18l-4.17 4.17-1.41-1.41L17 19H3M17 8V5h-2v3h2m0-5a2 2 0 0 1 2 2v3c0 1.11-.89 2-2 2h-2v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3h14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCoffeeToGo);
const Memo = memo(ForwardRef);
export default Memo;
