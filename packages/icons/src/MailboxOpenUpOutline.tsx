import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMailboxOpenUpOutline = (
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
    <path d="M14 12.85v-6h4v2h-2v4h-2m4-9H8a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2v-9a5 5 0 0 0-5-5m-7 14H5v-9a3 3 0 0 1 3-3 3 3 0 0 1 3 3v9m10 0h-8v-9c0-1.09-.35-2.14-1-3h6a3 3 0 0 1 3 3v9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMailboxOpenUpOutline);
const Memo = memo(ForwardRef);
export default Memo;
