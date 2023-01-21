import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgJellyfishOutline = (
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
    <path d="M12 4c3.8 0 6.5 2.8 6.5 6.8a18.311 18.311 0 0 1-13 0C5.5 6.8 8.2 4 12 4m0-2c-4.7 0-8.5 3.5-8.5 8.9.06.8.56 1.5 1.3 1.8l1.7.5v2.3a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.898.898 0 0 0-1-1 .898.898 0 0 0-1 1A2.405 2.405 0 0 0 5.9 18H6c1.41.06 2.56-1.09 2.5-2.5v-1.8h1v5.7c0 .67-1 .67-1 0a.898.898 0 0 0-1-1 .898.898 0 0 0-1 1c-.11 1.4 1 2.6 2.4 2.6H9c1.41.06 2.56-1.09 2.5-2.5V14h1v5.5A2.394 2.394 0 0 0 15 22h.1c1.37 0 2.46-1.14 2.4-2.5 0-1.33-2-1.33-2 0 0 .67-1 .67-1 0v-5.7h1v1.8c0 1.36 1.13 2.46 2.5 2.4h.1c1.37 0 2.46-1.14 2.4-2.5 0-1.33-2-1.33-2 0 0 .67-1 .67-1 0v-2.3l1.7-.5c.72-.34 1.21-1.02 1.3-1.8C20.5 5.5 16.7 2 12 2m0 4.2c-1.47.4-2.76 1.33-3.6 2.6-.4.53-1.2-.07-.8-.6a7.47 7.47 0 0 1 4.2-3 .5.5 0 0 1 .6.4c.1.3-.1.5-.4.6Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgJellyfishOutline);
const Memo = memo(ForwardRef);
export default Memo;
