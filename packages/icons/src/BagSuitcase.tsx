import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgBagSuitcase = (
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
    <path d="M17.03 6C18.11 6 19 6.88 19 8v11c0 1.13-.89 2-1.97 2 0 .58-.47 1-1.03 1-.5 0-1-.42-1-1H9c0 .58-.5 1-1 1-.56 0-1.03-.42-1.03-1C5.89 21 5 20.13 5 19V8c0-1.12.89-2 1.97-2H9V3c0-.58.46-1 1-1h4c.54 0 1 .42 1 1v3h2.03M13.5 6V3.5h-3V6h3M8 9v9h1.5V9H8m6.5 0v9H16V9h-1.5m-3.25 0v9h1.5V9h-1.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBagSuitcase);
const Memo = memo(ForwardRef);
export default Memo;
