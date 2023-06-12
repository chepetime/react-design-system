import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgJellyfish = (
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
    <path d="M19.5 14.5a.898.898 0 0 0-1 1c0 .67-1 .67-1 0v-2.3l1.7-.5c.72-.34 1.21-1.02 1.3-1.8C20.5 5.5 16.7 2 12 2s-8.5 3.5-8.5 8.9c.06.8.56 1.5 1.3 1.8l1.7.5v2.3a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.898.898 0 0 0-1-1 .898.898 0 0 0-1 1A2.394 2.394 0 0 0 6 18c1.41.06 2.56-1.09 2.5-2.5v-1.8h1v5.7c0 .67-1 .67-1 0a.898.898 0 0 0-1-1 .898.898 0 0 0-1 1A2.4 2.4 0 0 0 9 22c1.41.06 2.56-1.09 2.5-2.5V14h1v5.5A2.394 2.394 0 0 0 15 22c1.41.06 2.56-1.09 2.5-2.5 0-1.33-2-1.33-2 0 0 .67-1 .67-1 0v-5.7h1v1.8c0 1.36 1.13 2.46 2.5 2.4 1.41.06 2.56-1.09 2.5-2.5a.898.898 0 0 0-1-1m-8.9-9.8A5.566 5.566 0 0 0 7 7.3c-.17.2-.5.27-.7.1a.507.507 0 0 1-.1-.7 6.904 6.904 0 0 1 4.2-3c.27-.02.51.15.6.4.06.27-.12.55-.4.6Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgJellyfish);
const Memo = memo(ForwardRef);
export default Memo;
