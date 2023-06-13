import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMailboxOpenOutline = (
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
    <path d="M14 11h6v4h-2v-2h-4v-2m4-7H8a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5m-7 14H5V9a3 3 0 0 1 3-3 3 3 0 0 1 3 3v9m10 0h-8V9c0-1.08-.35-2.14-1-3h6a3 3 0 0 1 3 3v9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMailboxOpenOutline);
const Memo = memo(ForwardRef);
export default Memo;
