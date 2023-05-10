import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBagPersonalOutline = (
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
    <path d="M16 5V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1a4 4 0 0 0-4 4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a4 4 0 0 0-4-4m-6-1h4v1h-4V4m2 5 2 2-2 2-2-2 2-2m6 11H6v-4h2v2h1v-2h9v4m0-5H6V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBagPersonalOutline);
const Memo = memo(ForwardRef);
export default Memo;
