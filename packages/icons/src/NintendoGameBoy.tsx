import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNintendoGameBoy = (
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
    <path d="M7 1c-1.1 0-2 .9-2 2v18a2 2 0 0 0 2 2h7c2.76 0 5-2.24 5-5V3a2 2 0 0 0-2-2H7m1 3h8v7H8V4m1 10h1v2h2v1h-2v2H9v-2H7v-1h2v-2m7 1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-2 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNintendoGameBoy);
const Memo = memo(ForwardRef);
export default Memo;
