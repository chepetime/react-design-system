import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapMarkerStar = (
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
    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7m2.5 11L12 11.5 9.5 13l.7-2.8L8 8.3l2.9-.2L12 5.4 13.1 8l2.9.3-2.2 1.9.7 2.8Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMapMarkerStar);
const Memo = memo(ForwardRef);
export default Memo;
