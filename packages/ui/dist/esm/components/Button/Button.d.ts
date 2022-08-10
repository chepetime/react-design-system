import React from "react";
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type?: "main" | "secondary" | "plain";
    proportion?: "" | "small" | "medium" | "large";
    children?: React.ReactNode;
}
export declare function Button({ children, type, proportion, }: ButtonProps): JSX.Element;
//# sourceMappingURL=Button.d.ts.map