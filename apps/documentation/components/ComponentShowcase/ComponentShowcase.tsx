import React from "react";
import classnames from "classnames";
import styles from "./ComponentShowcase.module.css";

export default function ComponentShowcase({ children, component, seed = 1 }) {
  return (
    <div className={styles.container}>
      {component && (
        <div
          className={classnames(styles.component, styles[`component--${seed}`])}
        >
          {component}
        </div>
      )}
      {children && <div className={styles.code}>{children}</div>}
    </div>
  );
}
