import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgBookmarkOutline = (
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
    <path d="m17 18-5-2.18L7 18V5h10m0-2H7a2 2 0 0 0-2 2v16l7-3 7 3V5a2 2 0 0 0-2-2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmarkOutline);
const Memo = memo(ForwardRef);
export default Memo;
