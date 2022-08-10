import React from "react";
import css from "./Button.module.scss";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "main" | "secondary" | "plain";
  proportion?: "" | "large" | "medium" | "small";
  children?: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button type="button" className={css.Button}>
      {children}
    </button>
  );
}
