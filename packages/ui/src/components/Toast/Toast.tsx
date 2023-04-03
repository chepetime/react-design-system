import * as React from "react";
import classnames from "classnames";
import css from "./Toast.module.scss";

// A wrapper around this library might be wortg it
// https://www.npmjs.com/package/react-toastify
// or
// https://github.com/timolins/react-hot-toast

export interface ToastProps {
  children?: React.ReactNode;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (props: ToastProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Toast)} ref={ref}>
        <p>
          A wrapper around this library might be worth it{" "}
          <a href="https://www.npmjs.com/package/react-toastify">
            react-toastify
          </a>{" "}
          or{" "}
          <a href="https://github.com/timolins/react-hot-toast">
            react-hot-toast
          </a>
        </p>
      </div>
    );
  }
);

Toast.displayName = "Toast";
