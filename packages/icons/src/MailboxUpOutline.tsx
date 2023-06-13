import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMailboxUpOutline = (
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
    <path d="M17 4H7a5 5 0 0 0-5 5v11h18a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5m-7 14H4V9a3 3 0 0 1 3-3 3 3 0 0 1 3 3v9m10 0h-8V9c0-1.08-.35-2.14-1-3h6a3 3 0 0 1 3 3v9m-7-5h2V9h2V7h-4v6m-4-2H5V9h4v2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMailboxUpOutline);
const Memo = memo(ForwardRef);
export default Memo;
