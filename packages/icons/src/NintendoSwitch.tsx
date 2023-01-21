import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgNintendoSwitch = (
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
    <path d="M10.04 20.4H7.12c-.93 0-1.82-.4-2.48-1.04C4 18.7 3.6 17.81 3.6 16.88V7.12c0-.93.4-1.82 1.04-2.48C5.3 4 6.19 3.62 7.12 3.62h2.92V20.4M7.12 2A5.12 5.12 0 0 0 2 7.12v9.76C2 19.71 4.29 22 7.12 22h4.53V2H7.12M5.11 8c0 1.04.84 1.88 1.89 1.88 1.03 0 1.87-.84 1.87-1.88S8.03 6.12 7 6.12c-1.05 0-1.89.84-1.89 1.88m12.5 3c1.11 0 2.01.89 2.01 2 0 1.12-.9 2-2.01 2-1.11 0-2.03-.88-2.03-2 0-1.11.92-2 2.03-2m-.73 11A5.12 5.12 0 0 0 22 16.88V7.12C22 4.29 19.71 2 16.88 2h-3.23v20h3.23Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNintendoSwitch);
const Memo = memo(ForwardRef);
export default Memo;
