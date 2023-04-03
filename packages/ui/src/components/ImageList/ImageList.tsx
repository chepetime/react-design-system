import React from "react";
import css from "./ImageList.module.scss";

export interface ImageListProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: string;
  children?: React.ReactNode;
}

export const ImageList: React.FC<ImageListProps> = ({
  columns = 3,
  gap = 16,
  children,
}) => {
  return (
    <div
      className={css.ImageList}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
      }}
    >
      {React.Children.map(children, (child) => (
        <div className={css.Image}>{child}</div>
      ))}
    </div>
  );
};
