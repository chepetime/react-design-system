import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgBagSuitcaseOutline = (
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
    <path d="M9.5 18V9H8v9m4.75 0V9h-1.5v9M16 18V9h-1.5v9m2.53-12C18.11 6 19 6.88 19 8v11c0 1.13-.89 2-1.97 2 0 .58-.47 1-1.03 1-.5 0-1-.42-1-1H9c0 .58-.5 1-1 1-.56 0-1.03-.42-1.03-1C5.89 21 5 20.13 5 19V8c0-1.12.89-2 1.97-2H9V3c0-.58.46-1 1-1h4c.54 0 1 .42 1 1v3m-4.5-2.5V6h3V3.5M17.03 19V8H6.97v11" />
  </svg>
);
const ForwardRef = forwardRef(SvgBagSuitcaseOutline);
const Memo = memo(ForwardRef);
export default Memo;
