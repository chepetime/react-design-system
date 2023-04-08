import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path d="m15 19-6-2.11V5l6 2.11M20.5 3h-.16L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5c.05 0 .11 0 .16-.03L9 18.9l6 2.1 5.64-1.9c.21-.1.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMap);
const Memo = memo(ForwardRef);
export default Memo;
