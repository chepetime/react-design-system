import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCoffin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path d="M8 22 5 8l3-6h8l3 6-3 14H8m3-16v2H9v2h2v5h2v-5h2V8h-2V6h-2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCoffin);
const Memo = memo(ForwardRef);
export default Memo;
