import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgCodeBrackets = (
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
    <path d="M15 4v2h3v12h-3v2h5V4M4 4v16h5v-2H6V6h3V4H4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeBrackets);
const Memo = memo(ForwardRef);
export default Memo;
