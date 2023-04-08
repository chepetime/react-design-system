import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgMailbox = (
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
    <path d="M17 4H7a5 5 0 0 0-5 5v11h18a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5m-7 14H4V9a3 3 0 0 1 3-3 3 3 0 0 1 3 3v9m9-3h-2v-2h-4v-2h6v4M9 11H5V9h4v2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMailbox);
const Memo = memo(ForwardRef);
export default Memo;
