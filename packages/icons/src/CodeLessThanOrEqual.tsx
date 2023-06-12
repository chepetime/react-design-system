import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodeLessThanOrEqual = (
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
    <path d="M13 13h5v2h-5m0-6h5v2h-5m-2.91-3.59 1.41 1.41L8.32 12l3.18 3.18-1.41 1.42L5.5 12M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeLessThanOrEqual);
const Memo = memo(ForwardRef);
export default Memo;
