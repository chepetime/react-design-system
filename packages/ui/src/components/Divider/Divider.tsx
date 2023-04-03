import * as React from "react";
import css from "./Divider.module.scss";

export const Divider = React.forwardRef<HTMLHRElement>(
  (_props, ref: React.Ref<HTMLHRElement>) => {
    return <hr ref={ref} className={css.Divider} />;
  }
);

Divider.displayName = "Divider";
