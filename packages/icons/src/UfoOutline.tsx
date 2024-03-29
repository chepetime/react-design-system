import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUfoOutline = (
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
    <path d="M17 10.54C16.78 7.44 14.63 5 12 5s-4.78 2.44-5 5.54C4 11.23 2 12.5 2 14c0 2.21 4.5 4 10 4s10-1.79 10-4c0-1.5-2-2.77-5-3.46m-2.07 1.3c-1.9.21-3.96.21-5.86 0-.04-.28-.07-.56-.07-.84 0-2.2 1.35-4 3-4s3 1.8 3 4c0 .28 0 .56-.07.84Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUfoOutline);
const Memo = memo(ForwardRef);
export default Memo;
