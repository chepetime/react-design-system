import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodeParenthesesBox = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 14.3-1.6.7C6.9 16.5 6 14.3 6 12s.9-4.5 2.4-6l1.6.7C8.7 7.9 8 9.9 8 12s.7 4.1 2 5.3m5.6.7-1.6-.7c1.3-1.3 2-3.2 2-5.3s-.7-4.1-2-5.3l1.6-.7c1.5 1.5 2.4 3.7 2.4 6s-.9 4.5-2.4 6Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeParenthesesBox);
const Memo = memo(ForwardRef);
export default Memo;
