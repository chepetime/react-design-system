import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgCodeBracesBox = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 5H9v2c0 1.1-.9 2-2 2 1.1 0 2 .9 2 2v2h2v2H9c-1.1 0-2-.9-2-2v-1c0-1.1-.9-2-2-2v-2c1.1 0 2-.9 2-2V8c0-1.1.9-2 2-2h2v2m8 5c-1.1 0-2 .9-2 2v1c0 1.1-.9 2-2 2h-2v-2h2v-2c0-1.1.9-2 2-2-1.1 0-2-.9-2-2V8h-2V6h2c1.1 0 2 .9 2 2v1c0 1.1.9 2 2 2v2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeBracesBox);
const Memo = memo(ForwardRef);
export default Memo;
