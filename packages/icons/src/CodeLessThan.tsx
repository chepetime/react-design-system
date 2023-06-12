import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodeLessThan = (
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
    <path d="M13.59 7.41 9 12l4.59 4.6L15 15.18 11.82 12 15 8.82M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeLessThan);
const Memo = memo(ForwardRef);
export default Memo;
