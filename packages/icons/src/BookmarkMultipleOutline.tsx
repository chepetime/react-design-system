import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmarkMultipleOutline = (
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
    <path d="M9 1h10a2 2 0 0 1 2 2v16l-2-.87V3H7a2 2 0 0 1 2-2m6 19V7H5v13l5-2.18L15 20m0-15a2 2 0 0 1 2 2v16l-7-3-7 3V7a2 2 0 0 1 2-2h10Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmarkMultipleOutline);
const Memo = memo(ForwardRef);
export default Memo;
