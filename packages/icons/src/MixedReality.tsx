import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMixedReality = (
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
    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m3.25 12h1.5l1-3.43V15h1.5V9H10l-1 3.43L8 9H5.75v6h1.5v-3.43l1 3.43m5.25-6v6H15v-2h1.15l.85 2h1.5l-.9-2.1c.5-.25.9-.8.9-1.4v-1c0-.85-.65-1.5-1.5-1.5h-3.5m1.5 1.5h2v1h-2v-1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMixedReality);
const Memo = memo(ForwardRef);
export default Memo;
