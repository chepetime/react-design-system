import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgHomeVariant = (
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
    <path d="m12 3 8 6v12h-5v-7H9v7H4V9l8-6Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeVariant);
const Memo = memo(ForwardRef);
export default Memo;
