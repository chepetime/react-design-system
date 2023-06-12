import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapMarkerStarOutline = (
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
    <path d="M12 2c3.9 0 7 3.1 7 7 0 5.2-7 13-7 13S5 14.2 5 9c0-3.9 3.1-7 7-7m0 2C9.2 4 7 6.2 7 9c0 1 0 3 5 9.7C17 12 17 10 17 9c0-2.8-2.2-5-5-5m0 7.5 2.4 1.5-.6-2.8L16 8.3l-2.9-.2L12 5.4 10.9 8 8 8.3l2.2 1.9-.7 2.8 2.5-1.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMapMarkerStarOutline);
const Memo = memo(ForwardRef);
export default Memo;
