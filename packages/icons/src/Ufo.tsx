import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgUfo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path d="M15.94 10.28C15.66 7.87 14 6 12 6s-3.66 1.87-3.94 4.28C4.5 10.82 2 12.06 2 13.5 2 15.43 6.5 17 12 17s10-1.57 10-3.5c0-1.44-2.5-2.68-6.06-3.22Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUfo);
const Memo = memo(ForwardRef);
export default Memo;
