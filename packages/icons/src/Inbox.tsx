import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path d="M19 15h-4a3 3 0 0 1-3 3 3 3 0 0 1-3-3H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInbox);
const Memo = memo(ForwardRef);
export default Memo;
