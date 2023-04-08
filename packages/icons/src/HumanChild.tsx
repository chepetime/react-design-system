import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgHumanChild = (
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
    <path d="M12 2a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m-1 20H8v-6H6V9h12v7h-2v6h-3v-4h-2v4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHumanChild);
const Memo = memo(ForwardRef);
export default Memo;
