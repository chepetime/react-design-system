import React from 'react';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type?: "main" | "secondary" | "plain";
    proportion?: "" | "large" | "medium" | "small";
    children?: React.ReactNode;
}
declare function Button({ children }: ButtonProps): JSX.Element;

export { Button, ButtonProps };
