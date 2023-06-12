import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaperclip = (
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
    <path d="M16.5 6v11.5a4 4 0 0 1-4 4 4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5 2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1 1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4 4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5 5.5 5.5 0 0 0 5.5-5.5V6h-1.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPaperclip);
const Memo = memo(ForwardRef);
export default Memo;
