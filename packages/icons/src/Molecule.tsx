import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgMolecule = (
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
    <path d="M7.27 10 9 7h5.42l1.16-2-.08-.5A1.5 1.5 0 0 1 17 3a1.5 1.5 0 0 1 1.5 1.5c0 .71-.5 1.31-1.17 1.46l-.96 1.67L17.73 10l.86-1.5-.09-.5A1.5 1.5 0 0 1 20 6.5 1.5 1.5 0 0 1 21.5 8c0 .71-.5 1.3-1.15 1.46L18.89 12l1.73 3c.77.07 1.38.71 1.38 1.5a1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5v-.26L17.73 14l-1.36 2.37.96 1.67a1.5 1.5 0 0 1 1.17 1.46A1.5 1.5 0 0 1 17 21a1.5 1.5 0 0 1-1.5-1.5l.08-.5-1.16-2h-3.84l-1.16 2 .08.5A1.5 1.5 0 0 1 8 21a1.5 1.5 0 0 1-1.5-1.5c0-.71.5-1.31 1.17-1.46l.96-1.67L4.38 9C3.61 8.93 3 8.29 3 7.5A1.5 1.5 0 0 1 4.5 6 1.5 1.5 0 0 1 6 7.5v.26L7.27 10m2.88-1-1.73 3 1.73 3h4.7l1.73-3-1.73-3h-4.7Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMolecule);
const Memo = memo(ForwardRef);
export default Memo;
