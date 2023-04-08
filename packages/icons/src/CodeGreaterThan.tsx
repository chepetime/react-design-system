import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgCodeGreaterThan = (
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
    <path d="M10.41 7.41 15 12l-4.59 4.6L9 15.18 12.18 12 9 8.82M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeGreaterThan);
const Memo = memo(ForwardRef);
export default Memo;
