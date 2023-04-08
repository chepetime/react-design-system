import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgArrowTopRightThick = (
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
    <path d="M8.5 18.31 5.69 15.5l6.37-6.38H7.11V5.69h11.2v11.2h-3.42v-4.95L8.5 18.31Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowTopRightThick);
const Memo = memo(ForwardRef);
export default Memo;
