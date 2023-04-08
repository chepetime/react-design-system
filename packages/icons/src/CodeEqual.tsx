import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgCodeEqual = (
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
    <path d="M6 13h5v2H6m7-2h5v2h-5m0-6h5v2h-5M6 9h5v2H6M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeEqual);
const Memo = memo(ForwardRef);
export default Memo;
