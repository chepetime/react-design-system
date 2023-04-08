import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgCoffeeOff = (
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
    <path d="M3.27 2 22 20.72 20.72 22l-.99-1H2v-2h15.73l-2.29-2.29c-.44.18-.94.29-1.44.29H8c-2.21 0-4-1.79-4-4V5.27l-2-2L3.27 2M22 5v3c0 1.1-.9 2-2 2h-2v3c0 .36-.06.7-.15 1.04L6.81 3H20a2 2 0 0 1 2 2m-2 0h-2v3h2V5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCoffeeOff);
const Memo = memo(ForwardRef);
export default Memo;
