import * as React from "react";

export interface ParagraphProps {
  children?: React.ReactNode;
}

export function Paragraph(props: ParagraphProps) {
  return <p>{props.children}</p>;
}

Paragraph.displayName = "Paragraph";
