import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgAppleKeyboardCommand = (
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
    <path d="M6 2a4 4 0 0 1 4 4v2h4V6a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4h-2v4h2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4v-2h-4v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4h2v-4H6a4 4 0 0 1-4-4 4 4 0 0 1 4-4m10 16a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2h-2v2m-2-8h-4v4h4v-4m-8 6a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2v-2H6M8 6a2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2h2V6m10 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2v2h2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAppleKeyboardCommand);
const Memo = memo(ForwardRef);
export default Memo;
