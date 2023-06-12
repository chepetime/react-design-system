import React from "react";
import styles from "./ComponentContainer.module.css";

export default function ComponentContainer({ children }) {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
}
