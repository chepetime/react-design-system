import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgCodeGreaterThanOrEqual = (
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
    <path d="M13 13h5v2h-5m0-6h5v2h-5M6.91 7.41 11.5 12l-4.59 4.6-1.41-1.42L8.68 12 5.5 8.82M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeGreaterThanOrEqual);
const Memo = memo(ForwardRef);
export default Memo;
