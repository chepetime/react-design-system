import * as React from "react";

export interface ParagraphProps {
  children?: React.ReactNode;
}

export default function Paragraph(props: ParagraphProps) {
  return <p>{props.children}</p>;
}

Paragraph.displayName = "Paragraph";
