import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgAttachment = (
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
    <path d="M7.5 18A5.5 5.5 0 0 1 2 12.5 5.5 5.5 0 0 1 7.5 7H18a4 4 0 0 1 4 4 4 4 0 0 1-4 4H9.5A2.5 2.5 0 0 1 7 12.5 2.5 2.5 0 0 1 9.5 10H17v1.5H9.5a1 1 0 0 0-1 1 1 1 0 0 0 1 1H18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 18 8.5H7.5a4 4 0 0 0-4 4 4 4 0 0 0 4 4H17V18H7.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAttachment);
const Memo = memo(ForwardRef);
export default Memo;
