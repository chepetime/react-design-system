import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgCodeNotEqual = (
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
    <path d="M6 15h2v2H6m5-4h7v2h-7m0-6h7v2h-7M6 7h2v6H6M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeNotEqual);
const Memo = memo(ForwardRef);
export default Memo;
