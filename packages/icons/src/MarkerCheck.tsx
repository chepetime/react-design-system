import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgMarkerCheck = (
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
    <path d="m10 16-5-5 1.41-1.42L10 13.17l7.59-7.59L19 7m0-6H5c-1.11 0-2 .89-2 2v12.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.89-.97.89-1.66V3a2 2 0 0 0-2-2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMarkerCheck);
const Memo = memo(ForwardRef);
export default Memo;