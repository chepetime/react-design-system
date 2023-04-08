import React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgLungs = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path d="M15.47 3.11c-.47-.26-1.1-.06-1.36.43-.07.14-.11.3-.11.46v2.59l-.71-.71a.984.984 0 0 1-.29-.7V1h-2v4.17c0 .27-.1.52-.29.71l-.71.71V4c0-.56-.46-1-1-1-.17 0-.33.04-.47.11C4.72 5 2 9.97 2 15.77c0 1.9.33 3.78 1 5.55a1.007 1.007 0 0 0 1.44.55l5.06-2.8c.31-.17.5-.51.5-.88V9.41l1.3-1.29a.996.996 0 0 1 1.41 0L14 9.42v8.78c0 .36.21.7.5.88l5.08 2.8a1 1 0 0 0 1.36-.42c.02-.04.06-.09.06-.14.67-1.77 1-3.65 1-5.55C22 9.97 19.29 5 15.47 3.11Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLungs);
const Memo = memo(ForwardRef);
export default Memo;
