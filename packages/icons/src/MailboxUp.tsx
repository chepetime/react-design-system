import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgMailboxUp = (
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
    <path d="M5 9h4v2H5V9m17 0v9a2 2 0 0 1-2 2H2V9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5M10 9a3 3 0 0 0-3-3 3 3 0 0 0-3 3v9h6V9m6-2h-4v6h2V9h2V7Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMailboxUp);
const Memo = memo(ForwardRef);
export default Memo;
