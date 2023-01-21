import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgMapOutline = (
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
    <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5M10 5.47l4 1.4v11.66l-4-1.4V5.47m-5 .99 3-1.01v11.7l-3 1.16V6.46m14 11.08-3 1.01V6.86l3-1.16v11.84Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMapOutline);
const Memo = memo(ForwardRef);
export default Memo;
