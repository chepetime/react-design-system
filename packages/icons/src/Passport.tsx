import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPassport = (
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
    <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6m6 3a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 1c-.41.62-.75 1.29-.96 2h1.92A7.23 7.23 0 0 0 12 6m-1.3.22C9.78 6.53 9 7.17 8.54 8H10c.18-.62.4-1.22.7-1.78m2.59 0c.3.56.53 1.16.71 1.78h1.46c-.46-.83-1.25-1.46-2.17-1.78M8.13 9c-.08.32-.13.65-.13 1s.05.68.13 1h1.69c-.04-.33-.07-.66-.07-1 0-.34.03-.67.07-1H8.13m2.7 0c-.05.32-.08.66-.08 1 0 .34.03.67.08 1h2.34c.04-.33.08-.66.08-1 0-.34-.04-.68-.08-1h-2.34m3.35 0c.04.33.07.66.07 1 0 .34-.03.67-.07 1h1.69c.08-.32.13-.65.13-1s-.05-.68-.13-1h-1.69m-5.64 3c.46.83 1.24 1.46 2.16 1.78-.3-.56-.52-1.15-.7-1.78H8.54m2.5 0c.21.72.55 1.38.96 2 .42-.62.75-1.28.96-2h-1.92M14 12c-.18.63-.41 1.22-.71 1.78.92-.32 1.71-.95 2.17-1.78H14m-7 5h10v2H7v-2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPassport);
const Memo = memo(ForwardRef);
export default Memo;
