import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgCoffeeMakerCheck = (
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
    <path d="m17.75 21.16-2.75-3L16.16 17l1.59 1.59L21.34 15l1.16 1.41-4.75 4.75M13 18c0-2.22 1.21-4.15 3-5.19V11H6v5c0 1.64.81 3.09 2.03 4H4V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4h2V2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10.54A5.93 5.93 0 0 1 13 18m-3-9c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCoffeeMakerCheck);
const Memo = memo(ForwardRef);
export default Memo;
