import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPassportBiometric = (
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
    <path d="M4 4a2 2 0 0 0-2 2v5h6.13c.46-1.76 2.05-3 3.87-3a4.01 4.01 0 0 1 3.87 3H22V6a2 2 0 0 0-2-2H4m8 6a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2M2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-6.13A4.01 4.01 0 0 1 12 16a4.01 4.01 0 0 1-3.87-3H2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPassportBiometric);
const Memo = memo(ForwardRef);
export default Memo;
