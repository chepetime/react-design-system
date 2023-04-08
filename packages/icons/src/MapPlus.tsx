import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgMapPlus = (
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
    <path d="M9 3 3.36 4.9c-.2.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5c.05 0 .1 0 .16-.03L9 18.9l4.16 1.46c-.1-.44-.16-.9-.16-1.36 0-.23 0-.46.04-.7L9 16.9V5l6 2.1v7.46c1.07-.96 2.47-1.56 4-1.56.7 0 1.37.13 2 .36V3.5a.5.5 0 0 0-.5-.5h-.16L15 5.1 9 3m9 12v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMapPlus);
const Memo = memo(ForwardRef);
export default Memo;
