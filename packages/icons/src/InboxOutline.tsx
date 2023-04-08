import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgInboxOutline = (
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
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 19v-2h3.13a4.13 4.13 0 0 0 1.27 2m9.6 0h-4.4a4.13 4.13 0 0 0 1.27-2H19m0-2h-5v1a2 2 0 0 1-4 0v-1H5V5h14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInboxOutline);
const Memo = memo(ForwardRef);
export default Memo;
