import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgRadioTower = (
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
    <path d="M12 10a2 2 0 0 1 2 2 2 2 0 0 1-.47 1.29L16.7 22h-2.13L12 14.93 9.43 22H7.3l3.17-8.71A2 2 0 0 1 10 12a2 2 0 0 1 2-2m0-2a4 4 0 0 0-4 4c0 .5.1 1 .28 1.46l-.88 2.4A6.026 6.026 0 0 1 6 12a6 6 0 0 1 6-6 6 6 0 0 1 6 6c0 1.47-.53 2.81-1.4 3.86l-.88-2.4C15.9 13 16 12.5 16 12a4 4 0 0 0-4-4m0-4a8 8 0 0 0-8 8c0 2.36 1 4.5 2.64 5.94l-.72 2A10.005 10.005 0 0 1 2 12 10 10 0 0 1 12 2a10 10 0 0 1 10 10c0 3.23-1.54 6.11-3.92 7.94l-.72-2C19 16.5 20 14.36 20 12a8 8 0 0 0-8-8Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRadioTower);
const Memo = memo(ForwardRef);
export default Memo;