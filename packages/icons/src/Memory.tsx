import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMemory = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path d="M17 17H7V7h10m4 4V9h-2V7a2 2 0 0 0-2-2h-2V3h-2v2h-2V3H9v2H7c-1.11 0-2 .89-2 2v2H3v2h2v2H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2m-6 2h-2v-2h2m2-2H9v6h6V9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMemory);
const Memo = memo(ForwardRef);
export default Memo;
