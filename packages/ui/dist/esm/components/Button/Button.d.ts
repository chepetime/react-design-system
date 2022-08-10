import React from "react";
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type?: "main" | "secondary" | "plain";
    proportion?: "" | "large" | "medium" | "small";
    children?: React.ReactNode;
}
export declare function Button({ children }: ButtonProps): JSX.Element;
