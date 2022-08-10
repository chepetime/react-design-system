import * as React from 'react';
import React__default from 'react';

interface ButtonProps extends React__default.HTMLProps<HTMLButtonElement> {
    type?: "main" | "secondary" | "plain";
    proportion?: "" | "small" | "medium" | "large";
    children?: React__default.ReactNode;
}
declare function Button({ children, type, proportion, }: ButtonProps): JSX.Element;

interface ParagraphProps {
    children?: React.ReactNode;
}
declare function Paragraph(props: ParagraphProps): JSX.Element;
declare namespace Paragraph {
    var displayName: string;
}

interface SwitchProps {
    children?: React.ReactNode;
}
declare function Switch(props: SwitchProps): JSX.Element;
declare namespace Switch {
    var displayName: string;
}

export { Button, ButtonProps, Paragraph, ParagraphProps, Switch, SwitchProps };
