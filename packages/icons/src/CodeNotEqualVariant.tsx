import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodeNotEqualVariant = (
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
    <path d="M11 6.5v2.83L8.33 12 11 14.67v2.83L5.5 12M13 6.43 18.57 12 13 17.57v-2.83L15.74 12 13 9.26M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeNotEqualVariant);
const Memo = memo(ForwardRef);
export default Memo;
