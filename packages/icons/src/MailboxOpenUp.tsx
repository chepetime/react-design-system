import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMailboxOpenUp = (
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
    <path d="M8 4a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5H8m0 2a3 3 0 0 1 3 3v9H5V9a3 3 0 0 1 3-3m5 7V7h4v2h-2v4h-2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMailboxOpenUp);
const Memo = memo(ForwardRef);
export default Memo;
